import React, { Component } from 'react'

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h3>[404]</h3>
        {this.props.children}
      </div>
    )
  }
}

export default NotFoundPage