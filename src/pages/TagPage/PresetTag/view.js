import React, { Component } from 'react'
import style from './style.scss'
import presetData from './constant'
import { Link, withRouter } from 'react-router-dom'
import cs from 'classnames'


class PresetTags extends Component {
  constructor(props) {
    super(props)
    this.presetData = presetData
    this.state = {
      currTag: this.getSelectedTag(this.props.location.search)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    let newTag = this.getSelectedTag(nextProps.location.search)
    this.setState({
      currTag: newTag
    })
  }

  getSelectedTag = (search) => {
    let currTag = decodeURIComponent(search.substring(3)) ||
      encodeURIComponent('电影')
    return currTag
  }

  isSelectd = (tag) => {
    return tag === this.state.currTag
  }


  render() {
    return (
      <div className={style.presestTagWrapper}>
        <p className={style.title}>选影视</p>
        {this.presetData.map(tag => {
          return (
            <Link
              to={`/tag?q=${tag}`}
              className={
                cs({
                  [style.tag]: true,
                  [style.highlight]: this.isSelectd(`${tag}`)
                })
              }
              key={tag}
            >
              {tag}
            </Link>)
        })}
      </div>
    )
  }
}

export default withRouter(PresetTags)