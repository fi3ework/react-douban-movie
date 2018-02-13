import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import style from './style.scss'

const listComponentGenerator = ({
  hasDelta = false,
  hasNewLogo = false,
  hasBox = false,
}) => {
  let ListGenerator = (props) => {
    if (props.isLoading) {
      return <p className="loadingPlaceHolder">载入中...</p>
    }
    let { subjects } = props.payload
    return (
      <div>
        {/* <div className={style.title}>{title}</div> */}
        {
          subjects.map((item) => {
            let { id, title: subjectTitle } = item.subject
            return (
              <div className={style.subject} key={id}>
                <div>
                  <span>{item.rank}</span>{' '}
                  <Link to={{
                    pathname: `/subject/${id}`,
                  }}>
                    <span>{subjectTitle}</span>
                  </Link>
                  {
                    hasNewLogo ?
                      <span>
                        {item.new ? <span>[NEW]</span> : null}
                      </span> : null
                  }
                </div>
                <div>
                  {
                    hasDelta ?
                      <span>
                        {item.delta > 0 ?
                          <Icon type="arrow-up" /> : null
                        }
                        {item.delta < 0 ?
                          <Icon type="arrow-down" /> : null
                        }
                        {item.delta === 0 ?
                          '- ' : null
                        }
                        <span>{item.delta}</span>
                      </span>
                      : null
                  }
                  {
                    hasBox ?
                      <span>
                        {item.box ? <span>{Math.round(item.box / 10000)}万</span> : null}
                      </span> : null
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  return ListGenerator
}


export default listComponentGenerator