import React, { Component } from 'react'

const viewDecorator = WrappedComponent => {
  class ViewDecorator extends Component {
    constructor(props) {
      super(props)
      this.props.fetchData(this.props.API, this.props.params)
    }

    componentWillReceiveProps = (nextProps) => {
      if (this.doesParaChange(this.props, nextProps)) {
        this.props.fetchByParams(nextProps.params || {})
      }
    }

    doesParaChange(prevProps, nextProps) {
      let prevParams = prevProps.params || {}
      let nextParams = nextProps.params || {}
      // 如果前后两次的paraObject属性数量不同
      if (Object.keys(prevParams).length !== Object.keys(nextParams).length) {
        return true
      }
      // 如果前后两次的paraObject属性参数不同
      return !Object.keys(prevParams).every((key) => {
        return nextParams.hasOwnProperty(key) && prevParams[key] === nextParams[key]
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }
  return ViewDecorator
}

export default viewDecorator