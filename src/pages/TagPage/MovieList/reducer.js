import { reducerGenerator, actionTypeGenerator } from '@/utils/fetchGenerator'
import { pageName, moduleName } from './constant'

const SUCCESS_ACTION = actionTypeGenerator(pageName, moduleName).SUCCESS
const SUCCESS_START = actionTypeGenerator(pageName, moduleName).START

// shallow merge property of objects
let pushPayload = (old, added) => {
  let merged = Object.assign({}, old)
  Object.keys(added).forEach(key => {
    if (Array.isArray(old[key])) {
      merged[key] = merged[key].concat(added[key])
    }
  })
  return merged
}

export default reducerGenerator(
  {
    pageName,
    moduleName,
    initialState: {},
    customReducers: {
      CLEAR_TAG_DATA: (state, action) => {
        return {}
      },
      [SUCCESS_START]: (state, action) => {
        if (state.payload && typeof state.payload.count === 'number') {
          state.payload.count += 20
        }
        return {
          ...state,
          isLoading: action.isLoading,
        }
      },
      [SUCCESS_ACTION]: (state, action) => {
        let payload = action.doesPushBack ?
          pushPayload(state.payload, action.payload) :
          action.payload
        return {
          ...state,
          isLoading: false,
          payload
        }
      }
    }
  }
)

