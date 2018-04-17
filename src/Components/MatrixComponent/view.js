import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'

const matrixMaker = (items, cols) => {
  let colArr = []
  for (let i = 0; i < items.length; i += cols) {
    let tempArr = items.slice(i, i + cols)
    colArr.push(tempArr.map((item, index) => {
      return (
        <div className={style.col} key={index}>{item}</div>
      )
    }))
  }
  // wrap a col
  return colArr.map((row, index) => {
    return <div className={style.row} key={index}>{row}</div>
  })
}

const matrixComponentGenerator = ({
  itemView: ItemView,
  cols = 5
}) => {
  const MovieComponents = (props) => {
    let subjects = []
    if (props.isLoading) {
      for (let i = 0; i < props.placeHolderNum; i++) {
        subjects.push(null)
      }
    } else {
      subjects = props.payload.subjects
    }

    let items = subjects.map((item, index) => {
      let key = (item && item.id) || index
      return <ItemView key={key} data={item} />
    })

    return matrixMaker(items, cols)
  }

  MovieComponents.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
    placeHolderNum: PropTypes.number.isRequired
  }

  MovieComponents.defaultProps = {
    isLoading: true,
    placeHolderNum: 20,
    payload: {}
  }

  return MovieComponents
}


export default matrixComponentGenerator