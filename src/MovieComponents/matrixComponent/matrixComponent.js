import React, { Component } from 'react'
import style from './style.scss'

const matrixArranger = (items, cols) => {
  let colArr = []
  for (let i = 0; i < items.length; i += cols) {
    let tempArr = items.slice(i, i + cols)
    colArr.push(tempArr.map((item, index) => {
      return (
        <div className={style.col} key={index}>{item}</div>
      )
    }))
  }
  // 在外面包一层Row
  return colArr.map((row, index) => {
    return <div className={style.row} key={index}>{row}</div>
  })
}

const matrixComponentGenerator = ({
  itemView: ItemView,
  cols = 5
}) => {
  class MovieComponents extends Component {
    render() {
      if (this.props.isLoading) {
        return (<div className="loadingPlaceHolder">加载中...</div>)
      }

      let subjects = this.props.data.subjects
      let items = subjects.map(item => {
        return <ItemView key={item.id} data={item} />
      })

      return matrixArranger(items, cols)
    }
  }
  return MovieComponents
}


export default matrixComponentGenerator