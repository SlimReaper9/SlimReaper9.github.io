import React from 'react'
import { useSelector } from 'react-redux'
import { specialOfferBox } from '../../constants/constant'
import s from './SpecialOfferBox.module.scss'

const SpecialOfferBox = () => {
  let menu = useSelector(state => state.allPerfumes.menu)
  let offerArr = specialOfferBox.map((elem,id) => {
    return <div className={s.box} style={{background:`url(${elem.imgUrl}) no-repeat center`}}>
      <div className={s.title}>{elem.title}</div>
    </div>
  })
    return (
    <section style={menu ==true ? {display: 'none'} : {display: ''}}>
    <div className={s.wrapper}>
        {offerArr}
    </div></section>
  )
}

export default SpecialOfferBox