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
    if (this.props.isLoading || typeof this.props.isLoading === 'undefined') {
      return { start, pageNumber: -1, pageCount: -1 }
    }
    let pageNumber = Math.floor(start / this.props.count) + 1
    let pageCount = Math.ceil(this.props.payload.total / this.props.count) * 10
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
            params={{
              id: id,
              start,
              count: this.props.count
            }}
          />
          {
            this.props.isLoading ? null :
            <Pagination
              defaultCurrent={pageNumber}
              total={pageCount}
              onChange={this.onPaginationChange}
            />
          }
        </div>
        {
          this.props.isLoading || typeof this.props.isLoading === 'undefined' ? null :
          <SideInfo
            data={this.props.payload.subject}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let comments = state[commentsModuleName]
  return {
    isLoading: comments.isLoading,
    payload: comments.payload
  }
}

export default withRouter(connect(mapStateToProps, null)(CommentsPage))
