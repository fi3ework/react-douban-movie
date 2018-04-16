import { viewGenerator } from '@/utils/fetchGenerator'
import { API_COMING_SOON } from '@/constants'
import { pageName, moduleName } from '../constant'
import React from 'react'
import MovieCard from '@/Components/MovieCard'
import MovieCarouselGenerator from '@/Components/CarouselComponent'

const ItemView = (props) => {
  return <MovieCard hasHoverInfo={true} {...props} />
}

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_COMING_SOON,
    view: MovieCarouselGenerator({
      itemView: ItemView
    })
  }
)


const CommingSoonCarousel = () => (
  <div>
    <h2 className="homeSectionHeader">最近热门电影</h2>
    <DataView />
  </div>
)

export default CommingSoonCarousel