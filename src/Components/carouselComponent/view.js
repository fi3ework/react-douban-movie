import React, { PureComponent } from 'react'
import { Icon, Col, Row } from 'antd'
import Slider from 'react-slick'
import style from './style.scss'
import PropTypes from 'prop-types'
import { isObjectEmpty } from '@/utils/propDetect'

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
  static propTypes = {
    payload: PropTypes.object,
    cols: PropTypes.number.isRequired,
    onClickPaginator: PropTypes.func.isRequired
  }

  static defaultProps = {
    payload: {}
  }

  constructor(props) {
    super(props)
    this.state = {
      settings: {
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (oldIndex, newIndex) => {
          this.props.onClickPaginator(newIndex)
        }
      }
    }
  }

  render() {
    let { cols, payload } = this.props
    const isLoading = isObjectEmpty(payload)
    let subjects
    // if data is still loading
    if (isLoading) {
    // push null to be placeholder
      subjects = new Array(cols).fill(null)
    } else {
      subjects = payload.subjects
    }

    const carouselItems = []
    let colItems = subjects.map((subject, index) => {
      const currCard = React.cloneElement(this.props.children, { data: subject })
      return <Col span={Math.floor(24 / cols)} key={index}>{currCard}</Col>
    })

    // 将每个card按col分成几组，再push进数组
    for (let i = 0; i < colItems.length; i += cols) {
      carouselItems.push(colItems.slice(i, i + cols))
    }

    let rows = carouselItems.map((item, index) =>
      <div key={index}>
        <Row type="flex" justify="space-around">{item}</Row>
      </div>
    )

    return (
      <Slider {...this.state.settings}>
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
    static propTypes = {
      isLoading: PropTypes.bool.isRequired,
      payload: PropTypes.object.isRequired
    }

    static defaultProps = {
      isLoading: true,
      payload: {}
    }

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
      const rows = this.props.isLoading ? -1 : Math.ceil(this.props.payload.subjects.length / cols)
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
            onClickPaginator={this.onPageChange}
          >
            <ItemView {...itemViewPara} />
          </SliderWrapper>
        </div>
      )
    }
  }
  return MovieComponents
}

export default viewGeneratror