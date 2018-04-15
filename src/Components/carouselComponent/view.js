import React, { PureComponent } from 'react'
import { Icon, Col, Row } from 'antd'
import Slider from 'react-slick'
import style from './style.scss'

// custom prev arrow
const SamplePrevArrow = (props) => {
  const { className, onClick } = props
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <Icon type="left-circle" />
    </div>
  )
}

// custom next arrow
const SampleNextArrow = (props) => {
  const { className, onClick } = props
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <Icon type="right-circle" />
    </div>
  )
}

// page index indicator
const IndexIndicator = ({ currIndex, total, className }) => {
  return total === -1 ? null :
  <div className={className}>{currIndex} / {total}</div>
}

// slick wrapper
class SliderWrapper extends PureComponent {
  render() {
    let { ItemView, itemViewPara, cols, payload, onClickPaginator } = this.props
    let subjects
    let isLoading = true
    if (payload && payload.subjects) {
      isLoading = false
    }
    // if data is still loading
    if (isLoading) {
    // push null to be placeholder
      let defaultSubjects = []
      for (let i = 0; i < cols; i++) {
        defaultSubjects.push(null)
      }
      subjects = defaultSubjects
    } else {
      subjects = payload.subjects
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
        <Row type="flex" justify="space-around">{item}</Row>
      </div>
    )

    const settings = {
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (oldIndex, newIndex) => {
        onClickPaginator(newIndex)
      }
    }

    return (
      <Slider {...settings}>
        {rows}
      </Slider>
    )
  }
}

// slick wrapper
const viewGeneratror = ({
  itemView: ItemView,
  itemViewPara,
  cols = 5
}) => {
  class MovieComponents extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        index: 0
      }
    }

    onPageChange = (nextPage) => {
      this.setState({
        index: nextPage
      })
    }

    render() {
      let rows
      if (this.props.payload) {
        rows = Math.ceil(this.props.payload.subjects.length / cols)
      } else {
        rows = -1
      }

      return (
        <div className={style.sliderWrapper}>
          <IndexIndicator
            className={style.indexIndicator}
            currIndex={this.state.index + 1}
            total={rows}
          />
          <SliderWrapper
            payload={this.props.payload}
            cols={cols}
            ItemView={ItemView}
            itemViewPara={itemViewPara}
            onClickPaginator={this.onPageChange}
          />
        </div>
      )
    }
  }
  return MovieComponents
}

export default viewGeneratror