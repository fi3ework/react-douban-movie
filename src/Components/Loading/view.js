import React from 'react'
import style from './style.scss'
import loadingSVG from '@/assets/loading.svg'
export default ({ text = 'movie is coming...' }) => (
  <div className={style.loadingWrapper}>
    <img className={style.loading} alt="loading" src={loadingSVG} />
    <p className={style.loadingText}>{text}</p>
  </div>
)