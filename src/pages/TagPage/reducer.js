import { reducer as mainReducer, moduleName as mainModuleName } from './content'
import { combineReducers } from 'redux'
import pageName from './constant'

let reducer = combineReducers({
  [mainModuleName]: mainReducer
})

export { reducer, pageName }