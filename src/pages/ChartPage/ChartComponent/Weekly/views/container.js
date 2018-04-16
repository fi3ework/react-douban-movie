import { viewGenerator } from '@/utils/fetchGenerator'
import { API_WEEKLY } from '@/constants'
import { pageName, moduleName } from '../constant'
import listComponentGenerator from '@/Components/ListComponent'
import React from 'react'
import style from './style.scss'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_WEEKLY,
    view: listComponentGenerator({
      hasDelta: true
    })
  }
)

const WeeklyList = () => (
  <div>
    <h2 className={style.title}>本周口碑榜· · · · · ·</h2>
    <DataView />
  </div>
)

export default WeeklyList