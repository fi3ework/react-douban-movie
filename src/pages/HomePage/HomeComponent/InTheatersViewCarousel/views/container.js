import React from 'react'
import { viewGenerator } from '@/utils/fetchGenerator'
import { API_IN_THEATERS } from '@/constants'
import { pageName, moduleName } from '../constant'
import MovieCarouselGenerator from '@/Components/CarouselComponent'
import MovieCard from '@/Components/MovieCard'
import { Link } from 'react-router-dom'
import style from './style.scss'

const ItemView = (props) => {
  return <MovieCard hasBuyButton={true} hasHoverInfo={true} {...props} />
}

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_IN_THEATERS,
    view: MovieCarouselGenerator({
      itemView: ItemView
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