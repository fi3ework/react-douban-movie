import React, { Component } from 'react'
import viewGenerator from '@/fetchGenerator/viewGenerator'
import { pageName, moduleName } from './constant'
import { API_SEARCH } from '@/constants'
import detailsComponentGenerator from '@/MovieComponents/detailsComponent'
import style from './style.scss'

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_SEARCH,
    view: detailsComponentGenerator({
      hasStar: true,
      hasBuyTicket: false,
      hasNewLogo: false
    })
  }
)


export default DataView