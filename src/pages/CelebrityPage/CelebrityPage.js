import React, { Component } from 'react'
import { view as Celebrity } from './MainContent'

class CelebrityPage extends Component {
  render() {
    let id = this.props.match.params.id
    return (
      <div>
        <Celebrity id={id}
          params={{
            id: id,
          }}
        />
      </div>
    )
  }
}

export default CelebrityPage