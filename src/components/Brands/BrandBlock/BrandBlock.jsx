import React from 'react'
import { Link } from 'react-router-dom'
import s from './BrandBlock.module.scss'
const BrandBlock = (props) => {
  return (
    <Link to={'/brands/' + props.id}><div className={s.box}>
    <div><img src={props.imageUrl}></img></div>
    
</div></Link>
  )
}

export default BrandBlock