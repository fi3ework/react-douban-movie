import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/Components/Comments'
import style from '../css/main.scss'

export default (props) => {
  let { title, commentsCount, subjectID, popularComments } = props
  popularComments.sort((a, b) => (b.useful_count - a.useful_count))

  let para = { comments: popularComments }
  return (
    <div>
      <h2 className={style.sectionTitle}>{title}的短评 · · · · · ·
        <span>
          {' '}( <Link to={`/subject/${subjectID}/comments`}>
          全部{commentsCount}条
          </Link> )
        </span>
      </h2>
      <div>
        <span>热门</span> / <span>最新</span> / <span>好友</span>
      </div>
      <Container
        payload={para} hasAvatar={false}
      />
    </div>
  )
}