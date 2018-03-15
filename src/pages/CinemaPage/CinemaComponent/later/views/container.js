import React from 'react'
import { viewGenerator } from '@/fetchGenerator'
import { API_COMING_SOON } from '@/constants'
import { pageName, moduleName } from '../constant'
import matrixComponentGenerator from '@/Components/MatrixComponent'
import MovieCard from '@/Components/MovieCard'

const matrixItemView = matrixComponentGenerator({
  itemView: (props) => {
    return <MovieCard hasStar={true} hasBuyButton={true} {...props} />
  },
  cols: 5
})

const MatrixComponent = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_COMING_SOON,
    view: matrixItemView
  }
)

const NowPlayingComponent = (props) => {
  return (
    <div>
      <h2>即将上映</h2>
      <MatrixComponent {...props} />
    </div >
  )
}

export default NowPlayingComponent