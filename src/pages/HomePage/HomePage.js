import React, { Component } from 'react'
import { view as CommingSoonCarousel } from './HomeComponent/CommingSoonCarousel'
import { view as InTheatersCarousel } from './HomeComponent/InTheatersViewCarousel'
import { view as WeeklyList } from './HomeComponent/WeeklyList'
import style from './style.scss'

class HomePage extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.carouselsWrapper}>
          <InTheatersCarousel className={style.carousel} />
          <CommingSoonCarousel className={style.carousel} />
        </div>
        <div>
          <WeeklyList />
        </div>
      </div>
    )
  }
}

export default HomePage