import React, { Component } from 'react'
import { view as SearchData } from './content'

class SearchPage extends Component {
  render() {
    let query = this.props.query
    return (
      <div>
        <SearchData query={query}
          params={{
            query: query,
          }}
        />
      </div>
    )
  }
}

export default SearchPage