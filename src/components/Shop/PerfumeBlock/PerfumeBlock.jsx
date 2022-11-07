import React from 'react'
import s from './PerfumeBlock.module.scss'
const PerfumeBlock = (props) => {
  return (
    <div className={s.block}>
        <div className={s.image}><img src={props.imageUrl}></img></div>
        <div className={s.designer}>{props.designer}</div>
        <div className={s.name}>{props.title}</div>
        <div className={s.ml}>Eau de Toilette + {props.sizes}</div>
        <div className={s.box}><div className={s.price}>{props.price}$</div><div className={s.rating}>{props.rating}/10</div></div>
    </div>
  )
}

export default PerfumeBlock