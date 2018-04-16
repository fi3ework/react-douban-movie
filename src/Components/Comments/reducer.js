import { reducerGenerator } from '@/utils/fetchGenerator'
import { pageName, moduleName } from './constant'

export default reducerGenerator(
  {
    pageName,
    moduleName,
    initialState: {}
  }
)