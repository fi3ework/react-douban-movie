import { reducerGenerator } from '@/utils/fetchGenerator'
import { pageName, moduleName } from './constant'
import { combineReducers } from 'redux'

let contentReducer = reducerGenerator(
  {
    pageName,
    moduleName
  }
)

export default combineReducers({
  [moduleName]: contentReducer
})