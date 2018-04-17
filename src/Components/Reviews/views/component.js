import React, { Component } from 'react'
import { Rate, Icon } from 'antd'
import style from '../css/style.scss'
import cs from 'classnames'

// 长评底部的喜欢数及收起栏
class PackBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStickedOnBottom: false
    }
  }

  componentDidMount = () => {
    document.addEventListener('scroll', this.shouldStickBarOnBottom)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isFold === false && this.props.isFold === true) {
      this.shouldStickBarOnBottom(null, nextProps.isFold)
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.isStickedOnBottom !== nextState.isStickedOnBottom ||
      this.props !== nextProps) {
      return true
    } else {
      return false
    }
  }

  // 当点击展开按钮后再检查一次是否stick
  componentDidUpdate = (prevProps, prevState) => {
    this.shouldStickBarOnBottom()
  }

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.shouldStickBarOnBottom)
  }

  shouldStickBarOnBottom = () => {
    let contentRect = this.bar.previousSibling.getBoundingClientRect()
    let barRectHeight = this.bar.getBoundingClientRect().height
    let innerHeight = window.innerHeight
    if (!this.props.isFold &&
      contentRect.top <= innerHeight &&
      contentRect.bottom >= innerHeight - barRectHeight) {
      this.setState({
        isStickedOnBottom: true
      })
    } else {
      this.setState({
        isStickedOnBottom: false
      })
    }
  }

  render() {
    return (
      <div
        className={
          cs({
            [style.packWrapper]: true,
            [style.packWrapperStickBottom]: this.state.isStickedOnBottom && !this.props.isFold
          })
        }
        ref={(bar) => { this.bar = bar }}
      >
        <a><Icon type="up" /> {this.props.useful_count}</a>
        <a><Icon type="down" /> {this.props.useless_count}</a>
        <a>{this.props.comments_count} 回应</a>
        {
          this.props.isFold ? null :
          <div className={style.packButton} onClick={this.props.toggle}>收起</div>
        }
      </div>
    )
  }
}

class FoldReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFold: true
    }
  }

  summaryDecorator = (summary) => {
    return (
      <div>
        <span className={style.summaryContent}>{summary}</span>
        <span className={style.open}>(展开)</span>
      </div>
    )
  }

  contentFormatter = (content) => {
    return <div>{
      content.split('\n').map((item, key) => {
        return <span key={key}>{item}<br /></span>
      })
    }</div>
  }

  contentDecorator = (content) => {
    return (
      <div>
        <span className={style.mainContent}>
          {this.contentFormatter(content)}
        </span>
      </div>
    )
  }

  toggle = () => {
    if (this.state.isFold) {
      this.setState((prevState, props) => ({
        isFold: !this.state.isFold
      }))
    } else {
      this.setState((prevState, props) => ({
        isFold: !this.state.isFold
      }))
    }
  }

  render() {
    let {
      data: { useful_count, useless_count },
      data: { comments_count }
    } = this.props

    return (
      <div>
        {
          this.state.isFold ?
            <a onClick={this.toggle}>
              {this.summaryDecorator(this.props.initialContent)}
            </a> :
            <div className={style.mainContent}>
              {this.contentDecorator(this.props.fullContent)}
            </div>
        }
        {
          this.props.children(useful_count, useless_count, comments_count, this.state.isFold, this.toggle)
        }
      </div>

    )
  }
}

const Review = (props) => {
  let {
    data: { author: { name, avatar }},
    data: { rating: { value }},
    data: { title, alt, created_at, summary, content },
  } = props
  return (
    <div className={style.reviewWrapper} >
      <div className={style.reviewInfo} >
        <img className={style.avatar} src={avatar} alt={avatar} />
        <span className={style.authorName}>{name}</span>
        <Rate disabled defaultValue={0} value={value} count={5} />
        <span className={style.createAt}>{created_at}</span>
      </div>
      <h3 className={style.reviewTitleWrapper}>
        <a className={style.reviewTitle} href={alt}>{title}</a>
      </h3>
      <FoldReview
        initialContent={summary}
        fullContent={content}
        data={props.data}
      >
        {
          (useful_count, useless_count, comments_count, isFold, toggle) =>
            <PackBar
              useful_count={useful_count}
              useless_count={useless_count}
              comments_count={comments_count}
              toggle={toggle}
              isFold={isFold}
            />
        }
      </FoldReview>
    </div>
  )
}

export default Review