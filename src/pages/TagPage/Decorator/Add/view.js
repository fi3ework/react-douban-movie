import React, { Component } from 'react'
import pageName from '../../constant'
import { connect } from 'react-redux'
import { actionCreator } from '@/utils/fetchGenerator'
import { moduleName } from '../../MovieList/constant'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadMoreTagData: (URL) => {
      dispatch(actionCreator({
        pageName,
        moduleName,
        URL,
        startProps: {
          isLoading: false
        },
        successProps: {
          doesPushBack: true
        }
      })) }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contentData: state[pageName][moduleName]
  }
}

let Decorator = WrappedComponent => {
  class Wrapper extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}

export default Decorator