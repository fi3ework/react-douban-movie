import React, { PureComponent } from 'react'
import { Rate } from 'antd'
import classNames from 'classnames'
import style from './style.scss'
import { Link } from 'react-router-dom'

export default class extends PureComponent {
  render() {
    const { subjectItem } = this.props
    let infos = [...subjectItem.pubdates, ...subjectItem.casts.map(item => item.name)]
    return (
      <div className={style.wrapper} key={subjectItem.id} >
        <Link className={style.imageWrapper} to={`/subject/${subjectItem.id}`}>
          <img src={subjectItem.images.large} alt={subjectItem.images.large} />
        </Link>
        <div className={style.infoWrapper}>
          <Link className={style.title} to={`/subject/${subjectItem.id}`}>
            {subjectItem.title} / {subjectItem.original_title}
          </Link>
          <div className={style.infos}>
            {infos}
          </div>
          <div className={classNames({ [style.infos]: true, 'rater': true })}>
            <Rate allowHalf disabled defaultValue={0} value={Math.round(subjectItem.rating.average) / 2} count={5} />
            <span className={style.average}>{subjectItem.rating.average} </span>
            <span> ({subjectItem.collect_count}人评价)</span>
          </div>
        </div>
      </div >
    )
  }
}