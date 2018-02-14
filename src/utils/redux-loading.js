import { isCached } from '../utils/redux-cache'

const fetchMiddleware = store => next => action => {
  if (action.type !== 'REDUX_LOADING') {
    return next(action)
  }
  const [START, SUCCESS, ERROR] = action.types

  next({
    type: START,
    isLoading: true,
    cacheID: action.URL
  })

  let cacheState = isCached(action.URL)
  if (cacheState) {
    return
  }

  fetch(action.URL, { params: action.fetchParams })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status:' + response.status)
      }
      response.json().then((responseData) => {
        next({
          type: SUCCESS,
          isLoading: false,
          payload: responseData,
          cacheID: action.URL
        })
      }).catch((error) => {
        throw new Error('Invalid json response: ' + error)
      })
    }).catch(error => {
      next({
        type: ERROR,
        isLoading: false,
        error: error
      })
    })
}

export default fetchMiddleware