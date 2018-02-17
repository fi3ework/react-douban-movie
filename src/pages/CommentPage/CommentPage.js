import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { view as dataView, moduleName as commentsModuleName } from '@/Comments'
import SideInfo from '@/SideSubjectInfo'
import style from './style.scss'
import DoubanPagination from '@/DoubanPagination'



class CommentsPage extends Component {
  constructor(props) {
    super(props)
    this.commentsComponent = dataView()
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
    let id = this.props.match.params.id
    let CommentsComponent = this.commentsComponent
    return (
      <div className={style.content}>
        <div>
          <CommentsComponent
            params={{
              id: id,
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
