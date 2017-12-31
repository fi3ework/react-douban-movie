import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/main.scss'

const Attr = (props) => {
  let slash = props.isLast ? null : ' / '
  return (
    props.isHref ?
      <span><Link className={style.infoLink}to={`/celebrity/${props.id}`}>{props.children}</Link>{slash}</span> :
      <span >{props.children}{slash}</span>
  )
}

const Attrs = (props) => {
  let { value } = props
  let _value = !Array.isArray(value) ? [value] : value

  let _length = _value.length
  let sequence
  if (Array.isArray(_value)) {
    sequence = _value.map((item, index) => {
      return (
        <Attr
          id={item.id}
          key={index}
          isHref={item.alt}
          isLast={index === _length - 1}
          alt={item.alt}
        >
          {item.name || item}
        </Attr>
      )
    })
  }
  return sequence
}

const UnfoldQuery = ({ query, value }) => {
  if (!value || Object.keys(value).length === 0) {
    return null
  }

  return (
    <span>
      <span className={style.infoQuery}>{query}</span>: <Attrs value={value} />
      <br />
    </span>
  )
}

export default (props) => {
  let { casts, directors, writers, genres, countries, languages, pubdates, durations, aka } = props
  return (
    <div className={style.infoPanel}>
      <UnfoldQuery query="导演" value={directors} />
      <UnfoldQuery query="编剧" value={writers} />
      <UnfoldQuery query="主演" value={casts} />
      <UnfoldQuery query="类型" value={genres} />
      <UnfoldQuery query="制片国家/地区" value={countries} />
      <UnfoldQuery query="语言" value={languages} />
      <UnfoldQuery query="上映日期" value={pubdates} />
      <UnfoldQuery query="片长" value={durations} />
      <UnfoldQuery query="又名" value={aka} />
    </div>
  )
}