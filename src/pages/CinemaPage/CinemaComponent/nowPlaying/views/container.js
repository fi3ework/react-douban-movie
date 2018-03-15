import React from 'react'
import { viewGenerator } from '@/fetchGenerator'
import { API_IN_THEATERS } from '@/constants'
import { pageName, moduleName } from '../constant'
import matrixComponentGenerator from '@/Components/MatrixComponent'
import MovieCard from '@/Components/MovieCard'

const ItemView = (props) => {
  return <MovieCard hasStar={true} hasBuyButton={true} {...props} />
}

const MatrixComponent = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_IN_THEATERS,
    view: matrixComponentGenerator({
      itemView: ItemView,
      cols: 5
    })
  }
)

const NowPlayingComponent = (props) => {
  return (
    <div>
      <h2>正在上映</h2>
      <MatrixComponent {...props} />
    </div >
  )
}

export default NowPlayingComponent