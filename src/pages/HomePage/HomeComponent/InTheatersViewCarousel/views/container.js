import React from 'react'
import { viewGenerator } from '@/fetchGenerator'
import { API_IN_THEATERS } from '@/constants'
import { pageName, moduleName } from '../constant'
import MovieCarouselGenerator from '@/MovieComponents/carouselComponent'
import MovieCard from '@/MovieCard'
import generateComponentWithProps from '@/utils/generateComponentWithProps'
import { Link } from 'react-router-dom'
import style from './style.scss'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_IN_THEATERS,
    view: MovieCarouselGenerator({
      itemView: generateComponentWithProps(MovieCard, {
        hasBuyButton: true
      })
    })
  }
)

const InTheatersCarousel = () => (
  <div className={style.inTheatersWrapper}>
    <h2 className="homeSectionHeader">正在热映
      <Link className="showAll" to={`/cinema/`}>全部正在热映»</Link>
      <Link className="showAll" to={`/cinema/`}>即将上映»</Link>
    </h2>
    <DataView />
  </div>
)

export default InTheatersCarousel