import React, { Component } from 'react'
import viewGenerator from '@/fetchGenerator/viewGenerator'
import { pageName, moduleName } from './constant'
import { API_TAG } from '@/constants'
import detailsComponentGenerator from '@/Components/DetailsComponent'
import style from './style.scss'
import DoubanPagination from '@/Components/DoubanPagination'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PresetTags from '../PresetTag'

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
    let TagView = this.tagDataView
    console.log(this.props.payload)
    return (
      <div className={style.content}>
        <div>
          <TagView
            params={{
              tag: tag,
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
  console.log(ownProps)
  let search = state[pageName][moduleName]
  return {
    isLoading: search.isLoading,
    payload: search.payload
  }
}

const DecoratedContent = withRouter(connect(mapStateToProps, null)(TagContent))

const Container = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <PresetTags />
      <DecoratedContent {...props} />
    </React.Fragment>
  )
}


export default Container