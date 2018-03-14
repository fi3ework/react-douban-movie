import React from 'react'
import { Rate, Button } from 'antd'
import { Link } from 'react-router-dom'
import truncate from 'lodash/truncate'
import classNames from 'classnames'
import loadingImg from '../assets/loading.svg'
import style from './style.scss'

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
const notPubedInfo = (props) => {
  return <div>{props.mainlandPubdate}上映</div>
}

// 购票按钮
const BuyButton = (props) =>
  <div
    className={style.buyButtonWrapper}
    onClick={(e) => {
      e.preventDefault()
      window.open(`https://maoyan.com/query?kw=${props.title}`)
    }}
  >
    <Button type="primary">选座购票</Button>
  </div>


const MoiveCard = (props) => {
  let id,
    title,
    imgSrc,
    isPubed,
    isLoading
  // 如果还没传入数据
  if (!props.data) {
    id = -1
    title = ''
    imgSrc = loadingImg
    isPubed = false
    isLoading = true
  } else {
    ({
      id,
      title,
      images: { large: imgSrc },
      isPubed,
    } = props.data)
    isLoading = false
  }

  return (
    <Link to={!isLoading ? `/subject/${id}` : ''}>
      <div
        className={
          classNames({
            [style.loadingCard]: isLoading,
            [style.card]: true
          })}
        data-role="card">
        <div className={style.customImage} data-role="cardImage">
          <img alt={title} src={imgSrc}
            className={classNames({
              [style.loadingImg]: isLoading
            })}
          />
        </div>
        <div>
          {/* 电影名 */}
          <p className={style.title}>{truncate(title, { 'length': 7 })}</p>
          {
            // 暂未上映和已经上映
            isPubed ? notPubedInfo(props) : pubbedInfo(props)
          }
        </div>
        {
          // 购票按钮
          !isLoading && props.hasBuyButton ?
            <BuyButton title={title} /> : null
        }
      </div>
    </Link>
  )
}

export default MoiveCard
