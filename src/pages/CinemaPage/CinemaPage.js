import React, { Component } from 'react'
import { view as NowPlaying } from './CinemaComponent/nowPlaying'
import { view as Later } from './CinemaComponent/later'
import style from './style.scss'

class CinemaPage extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <NowPlaying start={0} count={100} />
        <Later start={0} count={10} />
      </div>
    )
  }
}

export default CinemaPage