import actionTypeGenerator from './actionTypeGenerator'
import { isCached, getCache } from '../redux-cache'

function actionCreator({
  pageName,
  moduleName,
  URL,
  fetchParams = {},
  doesCache = false,
  startProps = {},
  successProps = {},
  errorProps = {}
}) {
  const ACTION_TYPES = actionTypeGenerator(pageName, moduleName)
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.START,
      isLoading: true,
      ...startProps
    })

    if (isCached(URL)) {
      dispatch({
        type: ACTION_TYPES.SUCCESS,
        isLoading: false,
        payload: getCache(URL),
        ...startProps
      })
    } else {
      fetch(URL, { ...fetchParams })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Fail to get response with status:' + response.status)
          }
          response.json().then((responseData) => {
            let action = {
              type: ACTION_TYPES.SUCCESS,
              isLoading: false,
              payload: responseData,
              ...successProps
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
            error: error,
            ...errorProps
          })
        })
    }
  }
}

export default actionCreator