import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pageName } from '../../constant'
import { moduleName } from '../../SearchResult/constant'

const mapDispatchToProps = (dispatch, ownProps) => {
  let clearAction = {
    type: 'CLEAR_TAG_DATA'
  }
  return {
    clearTagData: () => { dispatch(clearAction) }
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
  return connect(null, mapDispatchToProps)(Wrapper)
}

export default Decorator