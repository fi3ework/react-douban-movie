import { reducer as commingSoonReducer, moduleName as commingSoonModuleName } from './HomeComponent/CommingSoonCarousel'
import { reducer as inTheatersViewReducer, moduleName as inTheatersModuleName  } from './HomeComponent/InTheatersViewCarousel'
import { reducer as weeklyListReducer, moduleName as weeklyListModuleName  } from './HomeComponent/WeeklyList'
import { combineReducers } from 'redux'
import pageName from './constant'

let reducer = combineReducers({
  [commingSoonModuleName]: commingSoonReducer,
  [inTheatersModuleName]: inTheatersViewReducer,
  [weeklyListModuleName]: weeklyListReducer
})

export { reducer, pageName }