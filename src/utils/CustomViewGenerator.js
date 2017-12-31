import React, { Component } from 'react'
const CustomViewGenerator = (WrappedComponent, viewParas) => (
  class ViewDecorator extends Component {
    render() {
      return (
        <WrappedComponent {...viewParas} {...this.props} />
      )
    }
  }
)

export default CustomViewGenerator