import React, { Component } from 'react'
import { Rate } from 'antd'
import style from '../css/style.scss'

class Comment extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.data.id !== this.props.data.id) {
      return true
    } else {
      return false
    }
  }

  formatDate(oriDate) {
    let regDate = /\d{4}-\d{2}-\d{2}/
    return regDate.exec(oriDate)[0]
  }

  render() {
    let {
      data: { author: { name, authorAlt, avatar }},
      data: { rating: { value }},
      data: { useful_count, content, created_at },
    } = this.props

    return (
      <div className={style.commentWrapper}>
        <img src={avatar} className={style.avatar} />
        <div className={style.info} >
          <a className={style.authorName} href={authorAlt}>{name}</a>
          <Rate disabled defaultValue={0} value={value} count={5} />
          <span className={style.createAt} >{this.formatDate(created_at)}</span>
          <span className={style.usefulCount}>{useful_count} <a className={style.approve}>有用</a></span>
          <div className={style.commentContent}>{content}</div>
          <a className={style.report}>举报</a>
        </div>
      </div>
    )
  }
}

export default Comment