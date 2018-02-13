import { viewGenerator } from '@/fetchGenerator'
import { API_TOP_250 } from '@/constants'
import { pageName, moduleName } from '../constant'
import matrixComponentGenerator from '@/MovieComponents/matrixComponent'
import React from 'react'
import style from './style.scss'
import MovieCard from '@/MovieCard'
import generateComponentWithProps from '@/utils/generateComponentWithProps'


const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_TOP_250,
    view: matrixComponentGenerator({
      itemView: generateComponentWithProps(MovieCard, {
        hasStar: false,
      }),
      cols: 4
    })
  }
)

const CommingSoonCarousel = () => (
  <div className="top250">
    <h2 className={style.title}>豆瓣电影TOP250</h2>
    <DataView start={0} count={12} />
  </div>
)

export default CommingSoonCarousel