import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { view as dataView, moduleName as commentsModuleName } from '@/Components/Comments'
import DoubanPagination from '@/Components/DoubanPagination'
import SideInfo from '@/Components/SideSubjectInfo'
import style from './style.scss'
import DocumentTitle from 'react-document-title'

const SubjectDocumentTitle = (payload) => {
  let title
  if (payload) {
    title = payload.subject.title + '的短评'
  } else {
    title = '豆瓣短评'
  }
  return <DocumentTitle title={`${title}`}></DocumentTitle>
}

class CommentsPage extends Component {
  constructor(props) {
    super(props)
    this.commentsComponent = dataView()
    let start = 0
    let count = 20
    start = this.getQueryFromLocation(this.props.location.search, 'start')
    count = this.getQueryFromLocation(this.props.location.search, 'count')

    this.state = {
      id: this.props.match.params.id,
      start,
      count
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      start: this.getQueryFromLocation(nextProps.location.search, 'start'),
      count: this.getQueryFromLocation(nextProps.location.search, 'count')
    })
  }

  getQueryFromLocation = (search, query) => {
    let regResult
    let queryReg = /start=(\d*)/.exec(search)
    if (queryReg && queryReg[1] !== '') {
      regResult = queryReg[1]
      return regResult
    }
  }

  render() {
    let id = this.props.match.params.id
    let CommentsComponent = this.commentsComponent
    return (
      <DocumentTitle title={'豆瓣电影'}>
        <div className={style.content}>
          <div className={style.commentWrapper}>
            <CommentsComponent
              render={SubjectDocumentTitle}
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
      </DocumentTitle>
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
