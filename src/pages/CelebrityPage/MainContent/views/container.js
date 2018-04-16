import React from 'react'
import Info from './Info'
import RelatedPic from './RelatedPic'
import MovieList from './MovieList'
import style from '../css/main.scss'
import { pageName, moduleName } from '../constant'
import { viewGenerator } from '@/utils/fetchGenerator'
import { API_CELEBRITY } from '@/constants'
import Loading from '@/Components/Loading'
import DocumentTitle from 'react-document-title'

class Celebrity extends React.Component {
  render() {
    if (this.props.isLoading) {
      return <Loading text="celebrity is coming... " />
    }
    let {
      name,
      name_en,
      summary,
      works,
      photos,
      avatars: { large: avatar }
    }
    = this.props.payload
    return (
      <DocumentTitle title={`${name} (豆瓣)`}>
        <div className={style.celebrityWrapper}>
          <h1 className={style.title}>{name}{name_en}</h1>
          <div className={style.headline}>
            <div>
              <img src={avatar} alt={avatar} className={style.avatar} />
            </div>
            <div>
              <Info data={this.props.payload} />
            </div>
          </div>
          <div>
            <div className={style.dashedBorder}></div>
            <div>
              <h2 className={style.sectionTitle}>影人简介  · · · · · ·</h2>
              <p>{summary}</p>
            </div>
            <div>
              <h2 className={style.sectionTitle}>影人图片  · · · · · ·</h2>
              <RelatedPic data={photos} />
            </div>
            <div>
              <h2 className={style.sectionTitle}>最受好评的5部作品  · · · · · ·</h2>
              <MovieList data={works.map(item => (item.subject))} />
            </div>
            {/* <div>
            <h2 className={style.sectionTitle}>最受好评的5部作品  · · · · · ·</h2>
            <MovieList data={worksSubjects} />
          </div> */}
          </div>
        </div>
      </DocumentTitle >
    )
  }
}

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_CELEBRITY,
    view: Celebrity,
    doesCache: true
  }
)

export default DataView
