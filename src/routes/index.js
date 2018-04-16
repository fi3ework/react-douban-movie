import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import baseStyle from '../css/base.scss'
import asyncComponent from '@/utils/asyncComponent'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { view as home } from '../pages/HomePage'

const subject = asyncComponent(() => import('@/routes/thunkRoutes'), 'SubjectRoute')
const celebrity = asyncComponent(() => import('@/routes/thunkRoutes'), 'CelebrityRoute')
const chart = asyncComponent(() => import('@/routes/thunkRoutes'), 'ChartRoute')
const cinema = asyncComponent(() => import('@/routes/thunkRoutes'), 'CinemaRoute')
const search = asyncComponent(() => import('@/routes/thunkRoutes'), 'SearchRoute')
const tag = asyncComponent(() => import('@/routes/thunkRoutes'), 'TagRoute')

const host = ''
const Routes = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <main className={baseStyle.main}>
        <Switch>
          <Route path={`/${host}subject`} component={subject} />
          <Route path={`/${host}celebrity`} component={celebrity} />
          <Route path={`/${host}chart`} component={chart} />
          <Route path={`/${host}cinema`} component={cinema} />
          <Route path={`/${host}search`} component={search} />
          <Route path={`/${host}tag`} component={tag} />
          <Route path={`/${host}`} component={home} />
          <Route path={`/*`} component={tag} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  </Router>
)

export default Routes