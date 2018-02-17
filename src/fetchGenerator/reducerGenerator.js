import actionTypeGenerator from './actionTypeGenerator'

function reducerGenerator({
  pageName,
  moduleName,
  initialState = { isLoading: true }
})
{
  const ACTION_TYPE = actionTypeGenerator(pageName, moduleName)
  let dataReducer = function (state = initialState, action) {
    switch (action.type) {
      case ACTION_TYPE.START: {
        return {
          ...state,
          isLoading: action.isLoading,
        }
      }

      case ACTION_TYPE.SUCCESS: {
        return {
          ...state,
          isLoading: action.isLoading,
          payload: action.payload,
        }
      }
      case ACTION_TYPE.FAILURE: {
        return state
      }
      default: {
        return state
      }
    }
  }
  return dataReducer
}


export default reducerGenerator