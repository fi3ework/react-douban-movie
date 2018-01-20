import React, { Component } from 'react'
import { Rate } from 'antd'
import { Link } from 'react-router-dom'
import style from './style.scss'
import classNames from 'classnames'

const detailsComponentGenerator = ({
  hasStar = true,
  hasBuyTicket = false,
  hasNewLogo = true
}) => {
  class MovieComponents extends Component {
    render() {
      if (this.props.isLoading) {
        return (<h2 className="loadingPlaceHolder">载入中...</h2>)
      }

      let subjects = this.props.payload.subjects
      return subjects.map((subjectItem) => {
        // 演员信息
        let infos = [...subjectItem.pubdates, ...subjectItem.casts.map(item => item.name)]
        infos = infos.join(' / ')
        return (
          <div className={style.wrapper} key={subjectItem.id}>
            <Link className={style.imageWrapper} to={`/subject/${subjectItem.id}`}>
              <img src={subjectItem.images.large} alt={subjectItem.images.large} />
            </Link>
            <div className={style.infoWrapper}>
              <Link className={style.title} to={`/subject/${subjectItem.id}`}>{subjectItem.title} / {subjectItem.original_title}</Link>
              <div className={style.infos}>
                {infos}
              </div>
              <div className={classNames({ [style.infos]: true, 'rater': true })}>
                <Rate allowHalf disabled defaultValue={0} value={Math.round(subjectItem.rating.average) / 2} count={5} />
                <span className={style.average}>{subjectItem.rating.average} </span>
                <span> ({subjectItem.collect_count}人评价)</span>
              </div>
            </div>
          </div>
        )
      })
    }
  }
  return MovieComponents
}


export default detailsComponentGenerator