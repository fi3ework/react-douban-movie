import React, { Component } from 'react'
import style from './style.scss'
import presetData from './constant'
import { Link } from 'react-router-dom'
import cs from 'classnames'

class PresetTags extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.presetData = presetData
    this.state = {
      currTag: decodeURIComponent(this.selectTag())
    }
  }

  selectTag = () => {
    let currTag = this.props.location.search.substring(3) ||
      encodeURIComponent('电影')
    return currTag
  }

  onChange = (tag) => {
    this.props.clearTagData()
    this.setState({
      currTag: tag
    })
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
              onClick={() => this.onChange(tag)}
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

export default PresetTags