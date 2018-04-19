import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import baseStyle from '../css/base.scss'
// import asyncComponent from '@/utils/asyncComponent'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { view as home } from '../pages/HomePage'
import { SubjectRoute, CelebrityRoute, ChartRoute, CinemaRoute, SearchRoute, TagRoute, NotFoundRoute } from '@/routes/thunkRoutes'

// const subject = asyncComponent(() => import('@/routes/thunkRoutes'), 'SubjectRoute')
// const celebrity = asyncComponent(() => import('@/routes/thunkRoutes'), 'CelebrityRoute')
// const chart = asyncComponent(() => import('@/routes/thunkRoutes'), 'ChartRoute')
// const cinema = asyncComponent(() => import('@/routes/thunkRoutes'), 'CinemaRoute')
// const search = asyncComponent(() => import('@/routes/thunkRoutes'), 'SearchRoute')
// const tag = asyncComponent(() => import('@/routes/thunkRoutes'), 'TagRoute')
// const notFound = asyncComponent(() => import('@/routes/thunkRoutes'), 'NotFoundRoute')

const host = ''
const Routes = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <main className={baseStyle.main}>
        <Switch>
          <Route path={`/${host}subject`} component={SubjectRoute} />
          <Route path={`/${host}celebrity`} component={CelebrityRoute} />
          <Route path={`/${host}chart`} component={ChartRoute} />
          <Route path={`/${host}cinema`} component={CinemaRoute} />
          <Route path={`/${host}search`} component={SearchRoute} />
          <Route path={`/${host}tag`} component={TagRoute} />
          <Route path={`/${host}`} exact component={home} />
          <Route path={`/*`} component={NotFoundRoute} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  </Router>
)

export default Routes