const fetchMiddleware = store => next => action => {

  if (action.type !== 'REDUX_LOADING') {
    return next(action)
  }
  const [LOADING, SUCCESS, ERROR] = action.types

  next({
    type: LOADING,
    isLoading: true,
  })

  // console.log(action.URL)
  fetch(action.URL, { params: action.fetchParams })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status:' + response.status)
      }
      response.json().then((responseData) => {
        next({
          type: SUCCESS,
          isLoading: false,
          payload: responseData
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