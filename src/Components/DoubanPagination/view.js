import { Pagination } from 'antd'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DoubanPagination extends Component {
  constructor(props) {
    super(props)
    let { start, pageNumber, pageCount } = this.calcPaginatorParas(props.total)
    this.state = {
      total: props.total,
      start,
      pageNumber,
      pageCount
    }
  }

  onPaginationChange = (page) => {
    let count = 20
    let targetLocation = `${this.props.location.pathname}?start=${(page - 1) * count}&count=${count}`
    this.props.history.push(targetLocation)
    this.props.onChange((page - 1) * count)
  }

  calcPaginatorParas = (total) => {
    let start = 0
    let regStart = /start=(\d*)/.exec(this.props.location.search)
    if (regStart && regStart[1] !== '') {
      start = regStart[1]
    }
    let pageNumber = Math.floor(start / 20) + 1
    let pageCount = Math.ceil(total / 20) * 10
    return { start, pageNumber, pageCount }
  }

  render() {
    return (
      <Pagination
        defaultCurrent={this.state.pageNumber}
        total={this.state.pageCount}
        onChange={this.onPaginationChange}
      />
    )
  }
}

export default withRouter(DoubanPagination)