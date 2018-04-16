import { viewGenerator } from '@/utils/fetchGenerator'
import { API_MOVIE_COMMENTS } from '@/constants'
import { pageName, moduleName } from '../constant'
import React, { Component } from 'react'
import Comment from './component'
import style from '../css/style.scss'

class Container extends Component {
  render() {
    // 如果正在加载中
    if (this.props.isLoading) {
      return <h2 className="loadingPlaceHolder">短评正在加载中，请稍后...</h2>
    }
    // 获取到了数据
    return (
      <div className={style.commentsWrapper}>
        {
          this.props.payload.comments.map((itemData, index) => {
            return (
              <Comment
                {...this.props}
                data={itemData}
                key={itemData.id}
              />
            )
          })
        }
        {this.props.children}
      </div>
    )
  }
}

const dataView = () => (
  viewGenerator(
    {
      pageName: pageName,
      moduleName: moduleName,
      API: API_MOVIE_COMMENTS,
      view: Container,
    }
  )
)

export { dataView, Container }