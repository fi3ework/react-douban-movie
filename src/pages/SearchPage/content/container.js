import React, { Component } from 'react'
import viewGenerator from '@/utils/fetchGenerator/viewGenerator'
import { pageName, moduleName } from './constant'
import { API_SEARCH } from '@/constants'
import detailsComponentGenerator from '@/Components/DetailsComponent'
import style from './style.scss'
import DoubanPagination from '@/Components/DoubanPagination'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const SearchDataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_SEARCH,
    view: detailsComponentGenerator({
      hasStar: true,
      hasBuyTicket: false,
      hasNewLogo: false
    })
  }
)


class SearchContent extends Component {
  constructor(props) {
    super(props)
    this.searchDataView = SearchDataView
    let start = 0
    let count = 20
    let startReg = /start=(\d*)/.exec(this.props.location.search)
    if (startReg && startReg[1] !== '') {
      start = startReg[1]
    }

    let countReg = /start=(\d*)/.exec(this.props.location.search)
    if (countReg && countReg[1] !== '') {
      count = countReg[1]
    }

    this.state = {
      id: this.props.match.params.id,
      start,
      count
    }
  }

  onQueryChange = (start) => {
    this.setState({
      start
    })
  }

  render() {
    let query = this.props.params.query
    let SearchView = this.searchDataView
    return (
      <div className={style.content}>
        <div>
          <SearchView
            params={{
              query: query,
              start: this.state.start,
              count: this.state.count
            }}
          />
          {
            this.props.isLoading || typeof this.props.isLoading === 'undefined' ? null :
            <DoubanPagination
              onChange={this.onQueryChange}
              total={this.props.payload.total}
            />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let search = state[pageName][moduleName]
  return {
    isLoading: search.isLoading,
    payload: search.payload
  }
}

export default withRouter(connect(mapStateToProps, null)(SearchContent))