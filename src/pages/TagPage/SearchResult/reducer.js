import { reducerGenerator, actionTypeGenerator } from '@/utils/fetchGenerator'
import { pageName, moduleName } from './constant'

let SUCCESS_ACTION = actionTypeGenerator(pageName, moduleName).SUCCESS

// shallow merge property of objects
let shallowMerge = (old, added) => {
  let merged = Object.assign({}, old)
  Object.keys(added).forEach(key => {
    if (Array.isArray(old[key])) {
      merged[key] = merged[key].concat(added[key])
    }
    if (typeof old[key] === 'number') {
      merged[key] = old[key] + added[key]
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
      [SUCCESS_ACTION]: (state, action) => {
        let payload = action.doesPushBack ?
          shallowMerge(state.payload, action.payload) :
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

