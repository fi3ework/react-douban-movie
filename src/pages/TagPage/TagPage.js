import React, { Component } from 'react'
import { view as SearchView } from './SearchResult'
import PresetTags from './PresetTag'
import { withRouter } from 'react-router-dom'
import ClearDecorator from './Decorator/Clear'

const DecoratedPresetTags = withRouter(ClearDecorator(PresetTags))

class SearchPage extends Component {
  render() {
    let query = this.props.query
    return (
      <div>
        <DecoratedPresetTags />
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