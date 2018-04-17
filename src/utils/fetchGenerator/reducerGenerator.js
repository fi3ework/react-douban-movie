import actionTypeGenerator from './actionTypeGenerator'

function reducerGenerator({
  pageName,
  moduleName,
  initialState = { isLoading: true },
  customReducers
})
{
  const ACTION_TYPE = actionTypeGenerator(pageName, moduleName)
  return function (state = initialState, action) {
    if (typeof customReducers === 'object' && Object.keys(customReducers).length) {
      let keys = Object.keys(customReducers)
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === action.type) {
          return customReducers[keys[i]](state, action)
        }
      }
    }

    if (action.type === ACTION_TYPE.START) {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }

    if (action.type === ACTION_TYPE.SUCCESS) {
      return {
        ...state,
        isLoading: action.isLoading,
        payload: action.payload,
      }
    }

    if (action.type === ACTION_TYPE.FAILURE) {
      return state
    }


    return state
  }
}


export default reducerGenerator