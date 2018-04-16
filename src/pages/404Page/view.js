import React, { PureComponent } from 'react'
import style from './style.scss'
import { Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

class NotFoundPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      remainTime: 3
    }
  }

  componentDidMount = () => {
    let id = setInterval(() => {
      this.setState({
        remainTime: this.state.remainTime - 1
      })

      if (this.state.remainTime === 0) {
        clearInterval(id)
        this.props.history.push('')
      }



    }, 1000)
  }

  render() {
    return (
      <div className={style.title}>
        <Icon type="exclamation-circle-o" />
        <h2>呃...你想访问的页面不存在</h2>
        <p> {this.state.remainTime}秒后 <Link to="/">返回首页</Link> </p>
      </div>
    )
  }
}

export default withRouter(NotFoundPage)
