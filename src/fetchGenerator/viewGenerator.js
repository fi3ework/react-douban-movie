import { connect } from 'react-redux'
import fetchCreator from '../utils/fetchCreator'
import actionTypeGenerator from './actionTypeGenerator'
import viewDecorator from './viewDecorator'

function generateIndexMoives({ pageName, moduleName, API, view }) {
  const ACTION_TYPE = actionTypeGenerator(pageName, moduleName)
  const fetchStart = () => ({
    type: ACTION_TYPE.START
  })

  const fetchSuccess = (result) => ({
    type: ACTION_TYPE.SUCCESS,
    data: result
  })

  const fetchFailure = (error) => ({
    type: ACTION_TYPE.FAILURE,
    error
  })

  const composeCommentsAPI = (requestObject) => {
    let requestPara = ''
    let APItoFill = API.indexOf('?') >= 0 ? API : API + '?'
    Object.keys(requestObject).forEach((key) => {
      if (APItoFill.indexOf(':' + key) >= 0) {
        let reg = new RegExp(`:${key}`)
        APItoFill = APItoFill.replace(reg, requestObject[key])
      } else {
        if (APItoFill[APItoFill.length - 1] === '?') {
          requestPara += key + '=' + requestObject[key]
        } else {
          requestPara += '&' + key + '=' + requestObject[key]
        }
      }
    })
    let composedRequest = requestPara ? APItoFill + requestPara : APItoFill
    return composedRequest
  }

  let fetchAPIdata = (requestObject) => {
    return fetchCreator(composeCommentsAPI(requestObject),
      fetchStart,
      fetchSuccess,
      fetchFailure)
  }

  let connected = connect((state, ownProps) => {
    console.log(pageName, moduleName)
    let currState = pageName ? state[pageName][moduleName] : state[moduleName]
    return {
      data: currState.data,
      isLoading: currState.isLoading
    }
  }, (dispatch, ownProps) => {
    return {
      fetchData: (requestObject) => {
        dispatch(fetchAPIdata(requestObject)())
      }
    }
  })(viewDecorator(view))

  return connected
}

export default generateIndexMoives