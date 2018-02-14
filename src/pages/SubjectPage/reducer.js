import { reducerGenerator } from '@/fetchGenerator'
import { pageName, moduleName } from './constant'
import { combineReducers } from 'redux'

let contentReducer = reducerGenerator(
  {
    pageName,
    moduleName,
    doesCache: true
  }
)

export default combineReducers({
  [moduleName]: contentReducer
})