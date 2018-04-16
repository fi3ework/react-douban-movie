import { viewGenerator } from '@/utils/fetchGenerator'
import { API_NEW_MOVIES } from '@/constants'
import { pageName, moduleName } from '../constant'
import detailsComponentGenerator from '@/Components/DetailsComponent'
import React from 'react'
import style from './style.scss'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_NEW_MOVIES,
    view: detailsComponentGenerator({
      hasStar: true,
      hasBuyTicket: false,
      hasNewLogo: true
    })
  }
)

const CommingSoonCarousel = () => (
  <div>
    <h2 className={style.title}>豆瓣新片榜 · · · · · ·</h2>
    <DataView />
  </div>
)

export default CommingSoonCarousel