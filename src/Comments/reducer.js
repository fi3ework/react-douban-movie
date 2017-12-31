import { reducerGenerator } from '../fetchGenerator'
import { pageName, moduleName } from './constant'

export default reducerGenerator(
  {
    pageName,
    moduleName,
    initialState: {}
  }
)