import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { cacheMiddleware } from './utils/redux-cache'

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
} from './Components/Comments'
// reviews
import {
  moduleName as reviewsModule,
  reducer as reviewsReducer
} from './Components/Reviews'
// search
import {
  pageName as searchPage,
  reducer as searchReducer
} from './pages/SearchPage'
// search
import {
  pageName as tagPage,
  reducer as tagReducer
} from './pages/TagPage'

const reducer = combineReducers({
  [homePage]: homeReducer,
  [cinemaPage]: cinemaReducer,
  [chartPage]: chartReducer,
  [subjectPage]: movieSubjectReducer,
  [reviewsModule]: reviewsReducer,
  [commentsModule]: commentsReducer,
  [celebrityPage]: celebrityReducer,
  [searchPage]: searchReducer,
  [tagPage]: tagReducer,
})

const middlewares = [thunkMiddleware, cacheMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const reduxLogger = require('redux-logger').logger
  middlewares.push(reduxLogger)
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
)

export default createStore(reducer, storeEnhancers)
