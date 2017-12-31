import { reducerGenerator } from '@/fetchGenerator'
import { pageName, moduleName } from './constant'
import { combineReducers } from 'redux'

let contentReducer = reducerGenerator(
  {
    pageName,
    moduleName,
    initialState: {}
  }
)

export default combineReducers({
  [moduleName]: contentReducer
})