import React from 'react'
import style from '../css/main.scss'

export default (props) => {
  let { imgSrc } = props
  return (
    <div className={style.mainPicWrapper}>
      <img src={imgSrc} alt={imgSrc} />
      <br />
      <a href={''}>更新描述或海报</a>
    </div>
  )
}