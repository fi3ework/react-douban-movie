import React from 'react'
import style from '../css/main.scss'
import InfoQuery from '@/Components/InfoQuery'


export default (props) => {
  let { gender, constellation, birthday, born_place, professions, aka_en, aka } = props.data
  return (
    <div className={style.infoPanel}>
      <InfoQuery query="性别" value={gender} />
      <InfoQuery query="星座" value={constellation} />
      <InfoQuery query="出生日期" value={birthday} />
      <InfoQuery query="出生地" value={born_place} />
      <InfoQuery query="职业" value={professions} />
      <InfoQuery query="更多外文名" value={aka_en} />
      <InfoQuery query="更多中文名" value={aka} />
    </div>
  )
}