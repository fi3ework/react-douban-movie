import React from 'react'
import Loading from '../Loading'
import DetailCard from '../DetailCard'
import PropTypes from 'prop-types'

const detailsComponentGenerator = ({
  hasStar = true,
  hasBuyTicket = false,
  hasNewLogo = true
}) => {
  let MovieComponents = (props) => {
    if (props.isLoading) {
      return <Loading />
    }

    let subjects = props.payload.subjects
    return subjects.map((subjectItem) => {
      // 演员信息
      return (
        <DetailCard key={subjectItem.id} subjectItem={subjectItem} />
      )
    })
  }

  MovieComponents.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    payload: PropTypes.any.isRequired
  }

  MovieComponents.defaultProps = {
    isLoading: true,
    payload: {}
  }

  return MovieComponents
}


export default detailsComponentGenerator