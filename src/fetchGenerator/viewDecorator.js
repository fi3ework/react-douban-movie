import React, { Component } from 'react'

const viewDecorator = WrappedComponent => {
  class ViewDecorator extends Component {
    constructor(props) {
      super(props)
      this.props.fetchData(props.paraObject || {})
    }

    componentWillReceiveProps = (nextProps) => {
      if (this.doesParaChange(this.props, nextProps)) {
        this.props.fetchData(nextProps.paraObject || {})
      }
    }

    doesParaChange(prevProps, nextProps) {
      let prevParaObject = prevProps.paraObject || {}
      let nextParaObject = nextProps.paraObject || {}
      // 如果前后两次的paraObject属性数量不同
      if (Object.keys(prevParaObject).length !== Object.keys(nextParaObject).length) {
        return true
      }
      // 如果前后两次的paraObject属性参数不同
      return !Object.keys(prevParaObject).every((key) => {
        return nextParaObject.hasOwnProperty(key) && prevParaObject[key] === nextParaObject[key]
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