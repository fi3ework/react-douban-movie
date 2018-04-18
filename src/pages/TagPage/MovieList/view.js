import React, { Component } from 'react'
import viewGenerator from '@/utils/fetchGenerator/viewGenerator'
import { pageName, moduleName } from './constant'
import { API_TAG } from '@/constants'
import detailsComponentGenerator from '@/Components/DetailsComponent'
import style from './style.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadMore from '../LoadMore'

const TagDataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_TAG,
    view: detailsComponentGenerator({
      hasStar: true,
      hasBuyTicket: false,
      hasNewLogo: false
    })
  }
)

class TagContent extends Component {
  constructor(props) {
    super(props)
    this.tagDataView = TagDataView
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
    let tag = this.props.params.query
    let MoviesInTag = this.tagDataView
    return (
      <div className={style.content}>
        <MoviesInTag
          params={{
            tag: tag,
            start: this.state.start,
            count: this.state.count
          }}
        />
        <LoadMore />
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

const DecoratedContent = withRouter(connect(mapStateToProps, null)(TagContent))

const Container = (props) => {
  return (
    <DecoratedContent {...props} />
  )
}

export default Container