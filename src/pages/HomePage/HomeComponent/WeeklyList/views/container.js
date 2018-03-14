import React from 'react'
import { API_WEEKLY } from '@/constants'
import { viewGenerator } from '@/fetchGenerator'
import { pageName, moduleName } from '../constant'
import listComponentGenerator from '@/Components/listComponent'
import { Link } from 'react-router-dom'
import style from './style.scss'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_WEEKLY,
    view: listComponentGenerator({})
  }
)

const WeeklyList = () => (
  <div className={style.weeklyWrapper}>
    <h2 className="homeSectionHeader">本周口碑榜
      <Link to="/chart" className="showAll">更多榜单»</Link>
    </h2>
    <DataView />
  </div>
)

export default WeeklyList