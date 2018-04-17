import { Pagination } from 'antd'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class DoubanPagination extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    count: 20,
    onChange: () => { }
  }

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

  backToTop = () => {
    window.scrollTo(0, 0)
  }

  onPaginationChange = (page) => {
    let { pathname, search } = this.props.location
    if (/start=\d*/.test(search)) {
      search = search.replace(/start=(\d*)/, `start=${(page - 1) * this.props.count}`)
    }
    else
    {
      search += !search ? '?' : '&'
      search += `start=${(page - 1) * this.props.count}&count=${this.props.count}`
    }

    this.props.history.push(pathname + search)
    this.backToTop()
  }

  calcPaginatorParas = (total) => {
    let start = 0
    let regStart = /start=(\d*)/.exec(this.props.location.search)
    if (regStart && regStart[1] !== '') {
      start = regStart[1]
    }
    let pageNumber = Math.floor(start / this.props.count) + 1
    let pageCount = Math.ceil(total / this.props.count) * 10
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