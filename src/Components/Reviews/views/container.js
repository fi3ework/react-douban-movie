import { viewGenerator } from '@/utils/fetchGenerator'
import { API_MOVIE_REVIEWS } from '@/constants'
import { pageName, moduleName } from '../constant'
import React, { Component } from 'react'
import Review from './component'

class Container extends Component {
  render() {
    // 如果正在加载中
    if (this.props.isLoading) {
      return <h1 className="loadingPlaceHolder">评论载入中，请稍后...</h1>
    }

    // 获取到了数据
    return (
      <div>
        {
          this.props.payload.reviews.map((review, index) => {
            return (
              <Review
                data={review}
                key={review.id}
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
      API: API_MOVIE_REVIEWS,
      view: Container,
    }
  )
)

export { dataView, Container }