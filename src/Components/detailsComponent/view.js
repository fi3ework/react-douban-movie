import React from 'react'
import Loading from '../Loading'
import DetailCard from '../DetailCard'
import style from './style.scss'

const detailsComponentGenerator = ({
  hasStar = true,
  hasBuyTicket = false,
  hasNewLogo = true
}) => {
  let MovieComponents = (props) => {
    let isLoading = true
    if (props.payload && props.payload.subjects) {
      isLoading = false
    }

    // placeholder
    if (isLoading) {
      return (
        <Loading />
      )
    }

    let subjects = props.payload.subjects
    return subjects.map((subjectItem) => {
      // 演员信息
      return (
        <DetailCard key={subjectItem.id} subjectItem={subjectItem} />
      )
    })
  }
  return MovieComponents
}


export default detailsComponentGenerator