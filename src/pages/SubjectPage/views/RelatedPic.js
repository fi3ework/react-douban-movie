import React from 'react'
import style from '../css/main.scss'

let PhotosArr = (props) => {
  let { photos } = props
  if (!photos.length) {
    return null
  }
  let photosArr = []
  for (let i = 0; i < 4; i++) {
    if (!photos[i]) {
      continue
    }
    photosArr.push(
      <li key={i}>
        <a href={photos[i].alt}>
          <img className={style.photo}
            src={photos[i].thumb}
            alt={photos[i].thumb}
          />
        </a>
      </li>
    )
  }
  return photosArr
}

let Trailers = (props) => {
  let { trailers } = props
  if (!trailers.length) {
    return null
  }
  return (
    <li>
      <a href={trailers[0].alt}>
        <img className={style.trailerPhoto}
          src={trailers[0].medium}
          alt={trailers[0].medium}
        />
      </a>
    </li>
  )
}

export default (props) => {
  let { trailers, photos, title, photosCount } = props
  return (
    <div>
      <h2 className={style.sectionTitle}>
        {title}的视频和图片 · · · · · ·
        <span className={style.picNum}>
          {' '}( <a>预告片: 99</a>{' | '}
          <a>图片:{photosCount}</a>{' | '}
          <a>添加图片</a> )
        </span>
      </h2>
      <ul className={style.picUl}>
        <Trailers trailers={trailers} />
        <PhotosArr photos={photos} />
      </ul>
    </div>
  )
}