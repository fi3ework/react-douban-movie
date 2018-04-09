import actionTypeGenerator from './actionTypeGenerator'
import { isCached, getCache } from '../utils/redux-cache'

function actionCreator({
  pageName,
  moduleName,
  URL,
  fetchParams = {},
  doesCache = false,
  extraActionProperty = {}
}) {
  const ACTION_TYPES = actionTypeGenerator(pageName, moduleName)
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.START,
      isLoading: true
    })

    if (isCached(URL)) {
      dispatch({
        type: ACTION_TYPES.SUCCESS,
        isLoading: false,
        payload: getCache(URL),
      })
    } else {
      fetch(URL, { params: fetchParams })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Fail to get response with status:' + response.status)
          }
          response.json().then((responseData) => {
            let action = {
              type: ACTION_TYPES.SUCCESS,
              isLoading: false,
              payload: responseData,
              ...extraActionProperty
            }

            if (doesCache) {
              action = {
                ...action,
                cacheKey: URL,
                cacheValue: responseData
              }
            }
            dispatch(action)
          }).catch((error) => {
            throw new Error('Invalid json response: ' + error)
          })
        }).catch(error => {
          dispatch({
            type: ACTION_TYPES.ERROR,
            isLoading: false,
            error: error
          })
        })
    }
  }
}


export default actionCreator