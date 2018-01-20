import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'
import reduxLoading from './utils/redux-loading'

// celebrity
import {
  reducer as celebrityReducer,
  pageName as celebrityPage,
} from './pages/CelebrityPage'
// subject
import {
  pageName as subjectPage,
  reducer as movieSubjectReducer,
} from './pages/SubjectPage'
// home
import {
  pageName as homePage,
  reducer as homeReducer
} from './pages/HomePage'
// cinema
import {
  pageName as cinemaPage,
  reducer as cinemaReducer
} from './pages/CinemaPage'
// chart
import {
  pageName as chartPage,
  reducer as chartReducer
} from './pages/ChartPage'
// comments
import {
  moduleName as commentsModule,
  reducer as commentsReducer
} from './Comments'
// reviews
import {
  moduleName as reviewsModule,
  reducer as reviewsReducer
} from './Reviews'

const reducer = combineReducers({
  [homePage]: homeReducer,
  [cinemaPage]: cinemaReducer,
  [chartPage]: chartReducer,
  [subjectPage]: movieSubjectReducer,
  [reviewsModule]: reviewsReducer,
  [commentsModule]: commentsReducer,
  [celebrityPage]: celebrityReducer,
})

const middlewares = [reduxLoading, thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
)

export default createStore(reducer, {
  [homePage]: {},
  [cinemaPage]: {},
  [chartPage]: {},
  [subjectPage]: {},
  [reviewsModule]: {},
  [commentsModule]: {},
  [celebrityPage]: {},
}, storeEnhancers)
