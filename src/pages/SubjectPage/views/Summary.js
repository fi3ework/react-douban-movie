import React from 'react'
import style from '../css/main.scss'

export default (props) => {
  let { title, summary } = props
  return (
    <div>
      <h2 className={style.sectionTitle}>{title}的剧情简介 · · · · · ·</h2>
      <p className={style.summary}>{summary}</p>
    </div>
  )
}