import React, { Component } from 'react'
import { Rate, Icon } from 'antd'
import style from '../css/style.scss'

const Packer = (props) => {
  return <div className={style.packWrapper} >
    <a><Icon type="up" /> {props.useful_count}</a>
    <a><Icon type="down" /> {props.useless_count}</a>
    <a>{props.comments_count}回应</a>
    {
      props.isFold ? null : <div className={style.packButton} onClick={props.toggle}>收起</div>
    }
  </div>
}

class FoldReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFold: true,
      currShowContent: this.props.initialContent
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
    console.log('toggle click')
    if (this.state.isFold) {
      this.setState((prevState, props) => ({
        currShowContent: this.props.toggleContent,
        isFold: !this.state.isFold
      }))
    } else {
      this.setState((prevState, props) => ({
        currShowContent: this.props.initialContent,
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
              {this.summaryDecorator(this.state.currShowContent)}
            </a> :
            <div className={style.mainContent}>
              {this.contentDecorator(this.state.currShowContent)}
            </div>
        }
        {this.props.children(useful_count, useless_count, comments_count, this.state.isFold, this.toggle)}
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
        toggleContent={content}
        data={props.data}
      >
        {(useful_count, useless_count, comments_count, isFold, toggle) => <Packer useful_count={useful_count} useless_count={useless_count} comments_count={comments_count} toggle={toggle} isFold={isFold} />}
      </FoldReview>
    </div>
  )
}


export default Review