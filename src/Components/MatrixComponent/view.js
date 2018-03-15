import React from 'react'
import style from './style.scss'

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
  let MovieComponents = (props) => {
    let subjects = []
    if (props.isLoading) {
      // 默认 20 个 placeholder
      for (let i = 0; i < 20; i++) {
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
  return MovieComponents
}


export default matrixComponentGenerator