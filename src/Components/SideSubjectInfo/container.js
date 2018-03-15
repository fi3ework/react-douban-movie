import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import InfoQuery from '@/Components/InfoQuery'

let container = (props) => {
  if (props.isLoading) {
    return null
  }
  let {
    id,
    title,
    images: { large: image },
    directors,
    casts,
    genres,
    durations,
    mainland_pubdate
  } = props.data
  return (
    <div className={style.wrapper}>
      <p>
        <Link to={`/subject/${id}`} >{`> 去 ${title} 的页面`}</Link>
      </p>
      <img className={style.img}src={image} />
      <InfoQuery query="导演" value={directors} />
      <InfoQuery query="主演" value={casts} />
      <InfoQuery query="类型" value={genres} />
      <InfoQuery query="片长" value={durations} />
      <InfoQuery query="上映" value={mainland_pubdate} />

    </div>
  )
}

export default container