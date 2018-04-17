import React from 'react'
import Info from './Info'
import MainPic from './MainPic'
import RatePanel from './RatePanel'
import Summary from './Summary'
import Celebrities from './Celebrities'
import RelatedPic from './RelatedPic'
import PopularComments from './PopularComments'
import PopularReviews from './PopularReviews'
import containerStyle from '../css/main.scss'
import { viewGenerator } from '@/utils/fetchGenerator'
import { pageName, moduleName } from '../constant'
import { API_MOVIE_SUBJECT } from '@/constants'
import Loading from '@/Components/Loading'
import DocumentTitle from 'react-document-title'

class MovieSubject extends React.Component {
  static propTypes = {
  }

  render() {
    let id = this.props.id
    if (this.props.isLoading) {
      return (<Loading />)
    }
    let payload = this.props.payload
    // h1
    let { title, original_title, year } = payload
    // Info & Celebrities
    let { casts, directors, writers, genres, countries, languages, pubdates, durations, aka } = payload
    // MainPic
    let { images: { large: imgSrc }} = payload
    // RatePanel
    let { rating, ratings_count: ratingsCount } = payload
    // Summary
    let { summary } = payload
    // RelatedPic
    let { trailers, photos, photos_count } = payload
    // PopularComments
    let { comments_count, popular_comments } = payload
    // PopularComments
    let { reviews_count, popular_reviews } = payload

    return (
      <DocumentTitle title={`${title} (豆瓣)`}>
        <div className={containerStyle.content}>
          <div className={containerStyle.main}>
            <h1 className={containerStyle.title}>{title}{' '}{original_title}<span>{' ('}{year}{')'}</span></h1>
            <div className={containerStyle.introducePanel}>
              <div>
                <MainPic
                  imgSrc={imgSrc}
                />
              </div>
              <div>
                <Info
                  directors={directors}
                  writers={writers}
                  casts={casts}
                  genres={genres}
                  countries={countries}
                  languages={languages}
                  pubdates={pubdates}
                  durations={durations}
                  aka={aka}
                />
              </div>
              <div>
                <RatePanel
                  title={title}
                  rating={rating}
                  ratingsCount={ratingsCount}
                />
              </div>
            </div>
            <div>
              <div>
                <Summary
                  title={title}
                  summary={summary}
                />
              </div>
            </div>
            <div>
              <div>
                <Celebrities
                  title={title}
                  casts={casts}
                  directors={directors}
                />
              </div>
            </div>
            <div>
              <div>
                <RelatedPic
                  title={title}
                  trailers={trailers}
                  photos={photos}
                  photosCount={photos_count}
                />
              </div>
            </div>
            <div>
              <PopularComments
                title={title}
                subjectID={id}
                commentsCount={comments_count}
                popularComments={popular_comments}
              />
            </div>
            <div>
              <PopularReviews
                title={title}
                subjectID={id}
                reviewsCount={reviews_count}
                popularReviews={popular_reviews}
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

const dataView = () => (
  viewGenerator(
    {
      pageName: pageName,
      moduleName: moduleName,
      API: API_MOVIE_SUBJECT,
      view: MovieSubject,
      doesCache: true
    }
  )
)

export default dataView