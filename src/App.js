import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { view as HomePage } from './pages/HomePage'
import { view as MoviePage } from './pages/SubjectPage'
import { view as ReviewPage } from './pages/ReviewPage'
import { view as CommentPage } from './pages/CommentPage'
import { view as CelebrityPage } from './pages/CelebrityPage'
import { view as ChartPage } from './pages/ChartPage'
import { view as CinemaPage } from './pages/CinemaPage'
import { view as SearchPage } from './pages/SearchPage'
import { view as TagPage } from './pages/TagPage'
import NotFoundPage from './pages/404Page'
import baseStyle from './css/base.scss'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import DocumentTitle from 'react-document-title'

const HomeRoute = ({ match }) => {
  console.log('HomeRoute')
  return (
    <Switch >
      <DocumentTitle title={'豆瓣电影'}>
        <Route path={`${match.url}`} exact component={HomePage} />
      </DocumentTitle>
      <DocumentTitle title={'豆瓣电影'}>
        <Route path={`${match.url}index`} component={HomePage} />
      </DocumentTitle>
    </Switch >
  )
}

const SubjectRoute = ({ match }) => {
  console.log('SubjectRoute')
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
  return (
    <Switch>
      <Route path={`${match.path}/:id`} exact component={CelebrityPage} />
    </Switch>
  )
}

const ChartRoute = ({ match }) => {
  console.log('Chart route')
  return (
    <Switch>
      <DocumentTitle title={'豆瓣电影排行榜'}>
        <Route path={`${match.path}`} exact component={ChartPage} />
      </DocumentTitle>
    </Switch>
  )
}

const CinemaRoute = ({ match }) => {
  console.log('Cinema route')
  return (
    <Switch>
      <DocumentTitle title={'选电影'}>
        <Route path={`${match.path}`} exact component={CinemaPage} />
      </DocumentTitle>
    </Switch>
  )
}

const SearchRoute = ({ match, location }) => {
  console.log('Search route')
  return (
    <SearchPage query={location.search.substring(3)} />
  )
}

const TagRoute = ({ match, location }) => {
  console.log('Tag route')
  return (
    <DocumentTitle title={'选影视'}>
      <TagPage query={location.search.substring(3)} />
    </DocumentTitle>
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
          <Route path={`/${host}tag`} render={TagRoute} />
          <Route path={`/${host}`} render={HomeRoute} />
          <Route path="/*" render={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App