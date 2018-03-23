import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import style from './style.scss'
import { debounce } from 'lodash'
import { actionCreator } from '@/fetchGenerator'
import { API_SEARCH } from '@/constants'
import { pageName } from '@/pages/SearchPage'
import { moduleName } from '@/pages/SearchPage/content'

const SearchPreview = (props) => {
  console.log(props)
  let subjects = props.data.subjects
  return (
    <div className={style.searchPreviewWrapper}>
      {subjects.slice(0, 6).map(item => {
        return (
          <div className={style.searchPreviewItem} key={item.id}>
            <img src={item.images.large} className={style.previewImg} />
            <div className={style.previewInfo}>
              <div>{item.title}</div>
              <div>{item.year}</div>
              <div>{item.original_title}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


class NavBar extends Component {
  searchQuery = (value) => {
    console.log(value)
    this.props.fetchQuery(value)
  }

  deboncedSearch = debounce(this.searchQuery, 300)

  render() {
    console.log(this.props.searchPreview)
    return (
      <div>
        <div className={style.globalNavItems} >
          <Link to={'/'} >豆瓣</Link>
          <a>读书</a>
          <a>读书</a>
          <a>音乐</a>
        </div>
        <div className={style.movieNav}>
          <div className={style.titleAndSearchWrapper}>
            <div className={style.titleAndSearch}>
              <Link className={style.title} to={'/'}>
                豆瓣电影
              </Link>
              <div className={style.searchBarWrapper}>
                <Input.Search
                  placeholder="搜索电影、电视剧、综艺、影人"
                  className={style.searchBar}
                  onChange={(e) => { // TODO: 不能直接传e
                    this.deboncedSearch(e.target.value)
                  }
                  }
                  onSearch={
                    (value) => {
                      this.props.history.location.pathname = `/`
                      this.props.history.push(`search?q=${value}`)
                    }
                  }
                />
                {
                  this.props.searchPreview.isLoading ||
                Object.prototype.toString.call(this.props.searchPreview.isLoading) === '[object Undefined]' ?
                    null :
                    <SearchPreview data={this.props.searchPreview.payload} />
                }
              </div>
            </div>
          </div>
          <div className={style.movieCateNavWrapper}>
            <div className={style.movieCateNav}>
              <Link to="/cinema">影讯&购票</Link>
              <Link to="/chart">排行榜</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    searchPreview: state[pageName][moduleName]
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuery: (query) => {
      let queryURL = API_SEARCH.replace(/:query/, query)
      console.log(queryURL)
      console.log(pageName)
      console.log(moduleName)
      let ac = actionCreator({ pageName, moduleName, URL: queryURL })
      ac(dispatch)
    }
  }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default withRouter(connected)