import React from 'react'
import { specialOfferBox } from '../../constants/constant'
import s from './SpecialOfferBox.module.scss'
const SpecialOfferBox = () => {
  let offerArr = specialOfferBox.map((elem,id) => {
    return <div className={s.box} style={{background:`url(${elem.imgUrl}) no-repeat center`}}>
      <div className={s.title}>{elem.title}</div>
    </div>
  })
    return (
    <section>
    <div className={s.wrapper}>
        {offerArr}
    </div></section>
  )
}

export default SpecialOfferBox