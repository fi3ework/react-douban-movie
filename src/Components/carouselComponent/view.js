import React from 'react'
import { Carousel, Col, Row } from 'antd'

const viewGeneratror = ({
  itemView: ItemView,
  itemViewPara,
  cols = 5,
}) => {
  let MovieComponents = (props) => {
    let subjects
    // if the data is still loading
    if (props.isLoading) {
      // push null to be placeholder
      let defaultSubjects = []
      for (let i = 0; i < cols; i++) {
        defaultSubjects.push(null)
      }
      subjects = defaultSubjects
    } else {
      subjects = props.payload.subjects
    }

    const carouselItems = []

    let colItems = subjects.map((subject, index) => {
      const currCard = <ItemView {...itemViewPara} data={subject} />
      return <Col span={Math.floor(24 / cols)} key={index}>{currCard}</Col>
    })

    for (let i = 0; i < colItems.length; i += cols) {
      carouselItems.push(colItems.slice(i, i + cols))
    }

    let rows = carouselItems.map((item, index) =>
      <div key={index}>
        <Row type="flex" justify="space-between">{item}</Row>
      </div>
    )

    return (
      <Carousel>
        {rows}
      </Carousel>
    )
  }
  return MovieComponents
}


export default viewGeneratror