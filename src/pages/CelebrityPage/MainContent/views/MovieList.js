import React from 'react'
import MovieCard from '@/Components/MovieCard'
import style from '../css/main.scss'

export default (props) => {
  let subjects = props.data
  if (!subjects || !Object.keys(subjects).length) {
    return null
  }
  return (
    <div>
      {
        subjects.slice(0, 5).map((item, index) => {
          return (
            <div key={index} className={style.movieCard} >
              <MovieCard data={item} hasYear={true} hasStar={false} />
            </div>
          )
        })
      }
    </div>
  )
}