export default (API,
  fetchStart,
  fetchSuccess,
  fetchFailure) => (() => {
  return (dispatch) => {
    dispatch(fetchStart())
    fetch(API).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status:' + response.status)
      }
      response.json().then((responseData) => {
        dispatch(fetchSuccess(responseData))
      }).catch((error) => {
        throw new Error('Invalid json response: ' + error)
      })
    }).catch((error) => {
      dispatch(fetchFailure(error))
    })
  }
})