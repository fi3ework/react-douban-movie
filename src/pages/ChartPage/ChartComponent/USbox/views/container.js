import { viewGenerator } from '@/utils/fetchGenerator'
import { API_US_BOX } from '@/constants'
import { pageName, moduleName } from '../constant'
import listComponentGenerator from '@/Components/ListComponent'
import React from 'react'
import style from './style.scss'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_US_BOX,
    view: listComponentGenerator({
      hasBox: true,
      hasNewLogo: true
    })
  }
)

const USBoxList = () => (
  <div>
    <h2 className={style.title}>北美票房榜· · · · · ·</h2>
    <DataView />
  </div>
)

export default USBoxList