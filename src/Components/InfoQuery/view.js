import React from 'react'
import style from './style.scss'

const Attr = (props) => {
  let slash = props.isLast ? null : <span> / </span>
  return (
    props.isHref && props.enableLink ?
      <span><a href={props.alt}>{props.children}</a>{slash}</span> :
      <span>{props.children}{slash}</span>
  )
}

const Attrs = (props) => {
  let { value } = props
  let _value
  if (!Array.isArray(value)) {
    _value = [value]
  } else {
    _value = value
  }

  let _length = _value.length
  let sequence
  if (Array.isArray(_value)) {
    sequence = _value.map((item, index) => {
      return (
        <Attr
          key={index}
          isHref={item.alt}
          isLast={index === _length - 1}
          alt={item.alt}
          enableLink={props.enableLink}
        >
          {item.name || item}
        </Attr>
      )
    })
  }
  return sequence
}

const InfoQuery = ({ query, value, enableLink = true }) => {
  if (!value || Object.keys(value).length === 0) {
    return null
  }

  return (
    <span>
      <span className={style.infoQuery}>{query}</span>: <Attrs value={value} enableLink={enableLink} />
      <br />
    </span>
  )
}

export default InfoQuery