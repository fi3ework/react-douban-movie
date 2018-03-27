import { reducerGenerator } from '@/fetchGenerator'
import { pageName, moduleName } from './constant'

export default reducerGenerator(
  {
    pageName,
    moduleName,
    initialState: {},
    customReducers: {
      CLEAR_TAG_DATA: (state, action) => {
        return {}
      }
    }
  }
)

