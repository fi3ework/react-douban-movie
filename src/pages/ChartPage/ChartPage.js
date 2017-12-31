import React, { Component } from 'react'
import { view as NewMovies } from './ChartComponent/NewMovies'
import { view as Weekly } from './ChartComponent/Weekly'
import { view as USbox } from './ChartComponent/USbox'
import { view as Top250 } from './ChartComponent/Top250'
import style from './style.scss'

class ChartPage extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <p className={style.title}>豆瓣电影排行榜</p>
        <div className={style.content}>
          <div className={style.newMovies}>
            <NewMovies />
          </div>
          <div className={style.aside}>
            <Weekly />
            <USbox />
            <Top250 />
          </div>
        </div>
      </div>
    )
  }
}

export default ChartPage