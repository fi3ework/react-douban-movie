import actionTypeGenerator from './actionTypeGenerator'


function actionCreator({
  pageName,
  moduleName,
  URL,
  params
}) {
  const ACTION_TYPES = actionTypeGenerator(pageName, moduleName)
  return {
    type: 'redux-composable',
    types: [ACTION_TYPES.START, ACTION_TYPES.SUCCESS, ACTION_TYPES.FAILURE],
    URL,
    params
  }
}


export default actionCreator