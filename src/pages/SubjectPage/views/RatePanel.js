import React from 'react'
import { Rate } from 'antd'
import style from '../css/main.scss'

const Histogram = (props) => {
  let { details } = props
  let totalCounts = 0
  Object.keys(details).forEach((key) => {
    totalCounts += details[key]
  })

  let histogram = []
  for (let i = 4; i > -1; i--) {
    let currRatio = parseFloat(details[i + 1] * 100 / totalCounts, 10).toFixed(1)
    let currBin =
      <div key={i}>
        <span className={style.starNum}>{i + 1}星</span>
        <span className={style.power} style={{ paddingLeft: `${currRatio}px` }}></span>
        <span className={style.starNum}>{currRatio}%</span>
      </div>
    histogram.push(currBin)
  }
  return histogram
}


export default (props) => {
  let { rating: { average }, rating: { details }, ratingsCount } = props
  return (
    <div className={style.rateWrapper}>
      <p className={style.rateTitle}>豆瓣评分</p>
      <div>
        <div className={style.starWrapper}>
          {/* 平均分   */}
          {
            average === 0 ?
              null :
              <strong className={style.average}>{average}</strong>
          }
          <div>
            <Rate allowHalf disabled defaultValue={0} value={Math.round(average) / 2} count={5} />
            <div>
              {
                average === 0 ?
                  <span className={style.noRate}>暂无评价</span> :
                  <a className={style.rateNum} href="">已有{ratingsCount}人评价</a>
              }
            </div>
          </div>
        </div>
        {
          average === 0 ?
            null :
            <Histogram details={details} />
        }
      </div>
    </div>
  )
}