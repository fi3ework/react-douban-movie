import React from 'react'
import style from '../css/main.scss'

export default (props) => {
  let photos = props.data
  if (!photos || !Object.keys(photos).length) {
    return null
  }
  return (
    photos.slice(0, 5).map(item => {
      let imgSrc = item.thumb
      let imgAlt = item.alt
      let imgId = item.id
      let imgOriginal = item.image
      return (
        <a href={imgOriginal} key={imgId}>
          <img src={imgSrc} alt={imgAlt} className={style.celebrityPhoto} />
        </a>
      )
    })
  )
}