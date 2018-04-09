import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '@/fetchGenerator'
import pageName from '../../constant'
import { moduleName } from '../../SearchResult/constant'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadMoreTagData: (URL) => {
      dispatch(actionCreator({
        pageName,
        moduleName,
        URL,
        extraActionProperty: {
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