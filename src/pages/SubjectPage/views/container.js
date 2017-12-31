import React, { Component } from 'react'
import DataView from './wrapper'

class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.movieSubject = DataView()
  }

  render() {
    let id = this.props.match.params.id
    let MovieSubject = this.movieSubject
    return (
      <div>
        <MovieSubject
          id={id}
          paraObject={{
            id: id,
          }}
        />
      </div>
    )
  }
}

export default MoviePage