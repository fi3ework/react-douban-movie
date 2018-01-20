import React, { Component } from 'react'
import { Pagination } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { view as dataView, moduleName as reviewModuleName } from '@/Reviews'
import SideInfo from '@/SideSubjectInfo'
import style from './style.scss'

class ReviewPage extends Component {
  static defaultProps = {
    count: 20
  }

  constructor(props) {
    super(props)
    this.reviewsComponent = dataView()
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
    let { start, pageNumber, pageCount } = this.calcPaginatorParas()
    let ReviewsComponent = this.reviewsComponent

    return (
      <div className={style.content}>
        <div>
          <ReviewsComponent
            params={{
              id: this.props.match.params.id,
              start: parseInt(start, 10),
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
  let reviews = state[reviewModuleName]
  return {
    isLoading: reviews.isLoading,
    payload: reviews.payload
  }
}

export default withRouter(connect(mapStateToProps, null)(ReviewPage))
