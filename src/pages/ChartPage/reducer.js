import { reducer as newMoviesReducer, moduleName as newMoviesModuleName } from './ChartComponent/NewMovies'
import { reducer as top250Reducer, moduleName as top250ModuleName } from './ChartComponent/Top250'
import { reducer as USboxReducer, moduleName as USboxModuleName } from './ChartComponent/USbox'
import { reducer as weeklyReducer, moduleName as weeklyModuleName  } from './ChartComponent/Weekly'
import { combineReducers } from 'redux'
import pageName from './constant'

let reducer = combineReducers({
  [newMoviesModuleName]: newMoviesReducer,
  [top250ModuleName]: top250Reducer,
  [USboxModuleName]: USboxReducer,
  [weeklyModuleName]: weeklyReducer
})

export { reducer, pageName }