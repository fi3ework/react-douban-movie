import actionTypeGenerator from './actionTypeGenerator'
import { combineReducers } from 'redux'

function reducerGenerator({
  pageName,
  moduleName,
  initialState = {}
}) {
  const ACTION_TYPE = actionTypeGenerator(pageName, moduleName)
  let dataReducer = function(state = initialState, action) {
    switch (action.type) {
      case ACTION_TYPE.START: {
        return state
      }
      case ACTION_TYPE.SUCCESS: {
        return action.data
      }
      case ACTION_TYPE.FAILURE: {
        return state
      }
      default: {
        return state
      }
    }
  }
  let loadingReducer = function (state = true, action) {
    switch (action.type) {
      case ACTION_TYPE.START: {
        return true
      }
      case ACTION_TYPE.SUCCESS: {
        return false
      }
      case ACTION_TYPE.FAILURE: {
        return false
      }
      default: {
        return state
      }
    }
  }
  return combineReducers({
    data: dataReducer,
    isLoading: loadingReducer
  })

}

export default reducerGenerator