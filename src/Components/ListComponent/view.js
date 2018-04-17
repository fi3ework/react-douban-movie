import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import style from './style.scss'
import Loading from '../Loading'
import PropTypes from 'prop-types'

const ListItem = ({ item, hasBox, hasDelta, hasNewLogo }) => {
  let { id, title: subjectTitle } = item.subject
  return (
    <div className={style.subject}>
      <div>
        <span>{item.rank}</span>{' '}
        <Link to={{
          pathname: `/subject/${id}`,
        }}>
          <span>{subjectTitle}</span>
        </Link>
        {
          hasNewLogo ?
            <span >
              {item.new ? <span className={style.newSup} >NEW</span> : null}
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
              <span>{'\u0020'}{item.delta}</span>
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
}


const listComponentGenerator = ({
  hasDelta = false,
  hasNewLogo = false,
  hasBox = false,
}) => {
  const ListGenerator = (props) => {
    if (props.isLoading) {
      return <Loading />
    }

    return (
      <div>
        {
          props.payload.subjects.map(item => {
            return (
              <ListItem
                item={item}
                key={item.subject.id}
                hasDelta={hasDelta}
                hasNewLogo={hasNewLogo}
                hasBox={hasBox}
              />)
          })
        }
      </div>
    )
  }

  ListGenerator.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired
  }

  ListGenerator.defaultProps = {
    isLoading: true,
    payload: {}
  }
  return ListGenerator
}


export default listComponentGenerator