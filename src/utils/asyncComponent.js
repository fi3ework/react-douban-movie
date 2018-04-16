import React, { Component } from 'react'

export default function asyncComponent(importComponent, componentName) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const exportModule = await importComponent()
      const exportName = typeof componentName === 'undefined' ? 'default' : componentName
      const { [exportName]: component } = exportModule
      this.setState({ component })
    }

    render() {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}