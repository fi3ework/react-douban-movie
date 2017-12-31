import React from 'react'
import { viewGenerator } from '@/fetchGenerator'
import { API_IN_THEATERS } from '@/constants'
import { pageName, moduleName } from '../constant'
import matrixComponentGenerator from '@/MovieComponents/matrixComponent'
import CustomViewGenerator from '@/utils/CustomViewGenerator'
import MovieCard from '@/MovieCard'

const MatrixComponent = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_IN_THEATERS,
    view: matrixComponentGenerator({
      itemView: CustomViewGenerator(MovieCard, {
        hasStar: true,
        hasBuyButton: true
      }),
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