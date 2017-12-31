import { reducer as laterReducer, moduleName as laterModuleName } from './CinemaComponent/later'
import { reducer as inTheatersReducer, moduleName as inTheatersModuleName } from './CinemaComponent/nowPlaying'
import { combineReducers } from 'redux'
import pageName from './constant'

let reducer = combineReducers({
  [laterModuleName]: laterReducer,
  [inTheatersModuleName]: inTheatersReducer,
})

export { reducer, pageName }