import React from 'react'
import { Rate } from 'antd'
import { Link } from 'react-router-dom'
import truncate from 'lodash/truncate'
import classNames from 'classnames'
import style from './style.scss'
import loadingImg from '../assets/barLoading.svg'

// 已上映的信息
const pubbedInfo = (props) => {
  let rate
  let year
  if (!props.data || !Object.keys(props.data).length) {
    return null
  } else {
    ({
      rating: { average: rate },
      year,
    } = props.data)
  }
  let {
    hasStar = true,
    hasYear = false
  }
  = props
  return (
    <div className={style.infoWrapper}>
      {
        // 如果有评分
        rate > 0 ?
          <div>
            <div className={style.rateAndStar}>
              {/* 是否有✨ */}
              {
                hasStar ?
                  <Rate className="movieCardStar" allowHalf disabled defaultValue={0} value={Math.round(rate) / 2} count={5} />
                  : null
              }
              {/* 分数 */}
              <span className={style.rate}>{rate}</span>
            </div>
            {/* 年份 */}
            {
              hasYear ?
                <p className={style.year}>{year}</p> : null
            }
          </div >
          :
          // 暂无评分
          <p className={style.noRate}>暂无评分</p>
      }
    </div>
  )
}

// 还未上映的信息
const notPubInfo = (props) => {
  return <div>{props.mainlandPubdate}上映</div>
}

const MoiveCard = (props) => {
  let id,
    title,
    imgSrc,
    isLater
  if (!props.data || !Object.keys(props.data).length) {
    id = -1
    title = ''
    imgSrc = loadingImg
    isLater = false
  } else {
    ({
      id,
      title,
      images: { large: imgSrc },
      isLater,
    } = props.data)
  }

  return (
    <Link to={id > 0 ? `/subject/${id}` : ''}>
      <div
        className={classNames({
          [style.loadingCard]: id < 0,
          [style.card]: true
        })} data-role="card">
        <div className={style.customImage} data-role="cardImage">
          <img alt={title} src={imgSrc}
            className={classNames({
              [style.loadingImg]: id < 0
            })}
          />
        </div>
        <div>
          {/* 电影名 */}
          <p className={style.title}>{truncate(title, { 'length': 7 })}</p>
          {
            // 暂未上映和已经上映
            isLater ? notPubInfo(props) : pubbedInfo(props)
          }
        </div>
        {
          // 购票按钮
          id > 0 && props.hasBuyButton ?
            <div className={style.buyButtonWrapper}>
              <button data-role="buyButton">选座购票</button>
            </div> : null
        }
      </div>
    </Link>
  )
}

export default MoiveCard
