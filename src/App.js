import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { view as HomePage } from './pages/HomePage'
import { view as MoviePage } from './pages/SubjectPage'
import { view as ReviewPage } from './pages/ReviewPage'
import { view as CommentPage } from './pages/CommentPage'
import NotFoundPage from './pages/404Page'
import { view as CelebrityPage } from './pages/CelebrityPage'
import { view as ChartPage } from './pages/ChartPage'
import { view as CinemaPage } from './pages/CinemaPage'
import { view as SearchPage } from './pages/SearchPage'
import baseStyle from './css/base.scss'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

const HomeRoute = ({ match }) => {
  console.log('HomeRoute')
  console.log(match)
  return (
    <Switch >
      <Route path={`${match.url}`} exact component={HomePage} />
      <Route path={`${match.url}index`} component={HomePage} />
    </Switch >
  )
}

const SubjectRoute = ({ match }) => {
  console.log('SubjectRoute')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}/:id`} exact component={MoviePage} />
      <Route path={`${match.path}/:id/reviews`} component={ReviewPage} />
      <Route path={`${match.path}/:id/reviews?start=:start`} component={ReviewPage} />
      <Route path={`${match.path}/:id/comments`} component={CommentPage} />
      <Route path={`${match.path}/:id/comments?start=:start`} component={CommentPage} />
    </Switch>
  )
}

const CelebrityRoute = ({ match }) => {
  console.log('Celebrity route')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}/:id`} exact component={CelebrityPage} />
    </Switch>
  )
}

const ChartRoute = ({ match }) => {
  console.log('Chart route')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={ChartPage} />
    </Switch>
  )
}

const CinemaRoute = ({ match }) => {
  console.log('Cinema route')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={CinemaPage} />
    </Switch>
  )
}

const SearchRoute = ({ match, location }) => {
  console.log('Search route')
  return (
    <SearchPage query={location.search.substring(3)} />
  )
}

const App = () => {
  let host = ''
  return (
    <div>
      <NavBar />
      <main className={baseStyle.main}>
        <Switch>
          <Route path={`/${host}subject`} render={SubjectRoute} />
          <Route path={`/${host}celebrity`} render={CelebrityRoute} />
          <Route path={`/${host}chart`} render={ChartRoute} />
          <Route path={`/${host}cinema`} render={CinemaRoute} />
          <Route path={`/${host}search`} render={SearchRoute} />
          <Route path={`/${host}`} render={HomeRoute} />
          <Route path="/*" render={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App