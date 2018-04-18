import React, { Component } from 'react'
import { view as SearchView } from './MovieList'
import PresetTags from './PresetTag'

class SearchPage extends Component {
  render() {
    let query = this.props.query
    return (
      <div>
        <PresetTags />
        <SearchView
          query={query}
          params={{
            query: query,
          }}
        />
      </div>
    )
  }
}

export default SearchPage