import React, { Component } from 'react'
const generateComponentWithProps = (WrappedComponent, viewParas) => (
  class ViewDecorator extends Component {
    render() {
      return (
        <WrappedComponent {...viewParas} {...this.props} />
      )
    }
  }
)


export default generateComponentWithProps