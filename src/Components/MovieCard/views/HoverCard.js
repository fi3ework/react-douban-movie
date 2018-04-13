import React from 'react'
import style from './style.scss'
import { Rate } from 'antd'
import InfoQuery from '../../InfoQuery'

export default (props) => {
  let data = props.data
  if (!data) {
    return null
  }
  return (
    <div className={style.hoverCardWrapper}
      style={{ left: `${props.pos.x}px`, top: `${props.pos.y}px` }}>
      <div>
        {data.title}
        {data.original_title}
        {data.year}
      </div>
      <div>
        <Rate className="movieCardStar" allowHalf disabled defaultValue={0} value={Math.round(data.rating.average) / 2} count={5} />
      </div>
      {data.durations[0]}
      {/* 由于豆瓣的接口限制，无法直接从非subject/:id获取电影的contury信息 */}
      <div><InfoQuery query={'导演'} value={data.directors} enableLink={false} /></div>
      <div><InfoQuery query={'演员'} value={data.casts} enableLink={false} /></div>
    </div>
  )
}
