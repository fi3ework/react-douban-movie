import React, { Component } from 'react'
import { Carousel, Col, Row } from 'antd'

const viewGeneratror = ({
  itemView: ItemView,
  itemViewPara,
  cols = 5,
}) => {
  class MovieComponents extends Component {
    render() {
      // 如果还没有获得到数据
      if (!this.props.data.subjects) {
        // return (<h2>LOADING MOVIES...</h2>)
        let defaultSubjects = []
        for (let i = 0; i < cols; i++) {
          defaultSubjects.push(null)
        }
        this.props.data.subjects = defaultSubjects
      }

      const carouselItems = []
      let tempCarouselItem = []
      this.props.data.subjects.forEach(function (subjectItem, subjectIndex) {
        const currCard = <ItemView {...itemViewPara} data={subjectItem} />
        tempCarouselItem.push(
          <Col span={Math.floor(24 / cols)} key={tempCarouselItem.length}>{currCard}</Col>
        )
        if (tempCarouselItem.length === cols) {
          carouselItems.push(tempCarouselItem)
          tempCarouselItem = []
        }
      })

      return (
        <Carousel>
          {
            carouselItems.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <Row type="flex" justify="space-between">{item}</Row>
                </div>
              )
            })
          }
        </Carousel>
      )
    }
  }
  return MovieComponents
}


export default viewGeneratror