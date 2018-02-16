import React, { Component } from 'react'

class NotFoundPage extends Component {
  render() {
    console.log('fucking 404')
    return (
      <div>
        <h2>[404]</h2>
        {this.props.children}
      </div>
    )
  }
}

export default NotFoundPage