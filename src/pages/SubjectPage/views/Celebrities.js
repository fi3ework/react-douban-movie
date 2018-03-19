import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/main.scss'

const Celebrity = ({ profile, identity }) => {
  if (!profile.avatars) {
    return null
  }
  return (
    <li className={style.celebrity}>
      <Link to={`/celebrity/${profile.id}`}>
        <img src={profile.avatars.medium} alt={profile.avatars.medium} />
      </Link>

      <p className={style.name}>
        <Link to={`/celebrity/${profile.id}`}>
          {profile.name}
        </Link>
      </p>
      {
        identity ? <p className={style.indentity}>{identity}</p> : null
      }
    </li>
  )
}

export default (props) => {
  let celebrities = []
  let toShowProps = [
    {
      data: props.directors.slice(0, 2),
      identity: '导演'
    },
    {
      data: props.casts.slice(0, 4),
      identity: '演员'
    }
  ]
  toShowProps.forEach((prop) => {
    prop.data.forEach((item, index) => {
      celebrities.push(
        <Celebrity profile={item} identity={prop.identity} key={celebrities.length} />)
    })
  })
  return (
    <div>
      <h2 className={style.sectionTitle}>{props.title}的影人列表 · · · · · ·</h2>
      <ul>
        {celebrities}
      </ul>
    </div>
  )
}