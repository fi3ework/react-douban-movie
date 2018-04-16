import React from 'react'
import { viewGenerator } from '@/utils/fetchGenerator'
import { API_COMING_SOON } from '@/constants'
import { pageName, moduleName } from '../constant'
import matrixComponentGenerator from '@/Components/MatrixComponent'
import MovieCard from '@/Components/MovieCard'

const MatrixItemView =
  matrixComponentGenerator({
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
    view: MatrixItemView
  }
)


const NowPlayingComponent = (props) => {
  return (
    <div>
      <h2>即将上映</h2>
      <MatrixComponent />
    </div >
  )
}

export default NowPlayingComponent