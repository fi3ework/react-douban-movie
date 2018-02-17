import React from 'react'
import { view as dataView } from '../PopularReviews'
import { Link } from 'react-router-dom'
import style from '../css/main.scss'

export default (props) => {
  let { title, subjectID, reviewsCount } = props
  let ReviewsComponent = dataView()
  return (
    <div>
      <h2 className={style.sectionTitle}>
        {title}的影评 · · · · · ·
        (<Link to={`/subject/${subjectID}/reviews`}>全部{reviewsCount}条</Link>)
      </h2>
      <ReviewsComponent
        params={{
          id: subjectID,
          start: 0,
          count: 10
        }}
      />
      <Link to={`/subject/${subjectID}/reviews`}>{['> ', `更多影评${reviewsCount}篇`]}</Link>
    </div>
  )
}