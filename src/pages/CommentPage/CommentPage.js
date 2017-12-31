import React, { Component } from 'react'
import { Pagination } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { view as dataView, moduleName as commentsModuleName } from '@/Comments'
import SideInfo from '@/SideSubjectInfo'
import style from './style.scss'

class CommentsPage extends Component {
  static defaultProps = {
    count: 20
  }

  constructor(props) {
    super(props)
    this.commentsComponent = dataView()
  }

  onPaginationChange = (page) => {
    let count = this.props.count
    let targetLocation = `${this.props.location.pathname}?start=${(page - 1) * count}&count=${count}`
    this.props.history.push(targetLocation)
  }

  calcPaginatorParas = () => {
    let start = 0
    let regStart = /start=(\d*)/.exec(this.props.location.search)
    if (regStart && regStart[1] !== '') {
      start = regStart[1]
    }
    let pageNumber = Math.floor(start / this.props.count) + 1
    let pageCount = Math.ceil(this.props.commentsCount / this.props.count) * 10
    return { start, pageNumber, pageCount }
  }

  render() {
    let id = this.props.match.params.id
    let { start, pageNumber, pageCount } = this.calcPaginatorParas()
    let CommentsComponent = this.commentsComponent
    return (
      <div className={style.content}>
        <div>
          <CommentsComponent
            paraObject={{
              id: id,
              start,
              count: this.props.count
            }}
          />
          {
            pageCount > 0 ?
              <Pagination
                defaultCurrent={pageNumber}
                total={pageCount}
                onChange={this.onPaginationChange}
              />
              : null
          }
        </div>
        <SideInfo
          isLoading={this.props.isLoading}
          data={this.props.subjectInfo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    commentsCount: state[commentsModuleName].data.total,
    subjectInfo: state[commentsModuleName].data.subject,
    isLoading: state[commentsModuleName].isLoading,
  }
}

export default withRouter(connect(mapStateToProps, null)(CommentsPage))
