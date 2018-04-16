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
      <MovieSubject
        id={id}
        params={{
          id: id
        }}
      />
    )
  }
}

export default MoviePage