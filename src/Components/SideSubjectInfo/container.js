import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'
import InfoQuery from '@/Components/InfoQuery'

// const Attr = (props) => {
//   let slash = props.isLast ? null : <span> / </span>
//   return (
//     props.isHref ?
//       <span><a href={props.alt}>{props.children}</a>{slash}</span> :
//       <span >{props.children}{slash}</span>
//   )
// }

// const Attrs = (props) => {
//   let { value } = props
//   let _value
//   if (!Array.isArray(value)) {
//     _value = [value]
//   } else {
//     _value = value
//   }

//   let _length = _value.length
//   let sequence
//   if (Array.isArray(_value)) {
//     sequence = _value.map((item, index) => {
//       return (
//         <Attr
//           key={index}
//           isHref={item.alt}
//           isLast={index === _length - 1}
//           alt={item.alt}
//         >
//           {item.name || item}
//         </Attr>
//       )
//     })
//   }
//   return sequence
// }

// const UnfoldQuery = ({ query, value }) => {
//   if (!value || Object.keys(value).length === 0) {
//     return null
//   }

//   return (
//     <span>
//       <span className={style.infoQuery}>{query}</span>: <Attrs value={value} />
//       <br />
//     </span>
//   )
// }

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