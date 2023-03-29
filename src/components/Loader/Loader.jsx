import React from 'react'
import loader from '../../assets/Ripple-1s-200px.gif'
import s from './Loader.module.scss'
const Loader = () => {
  return (
    <><div className={s.loader}><img src={loader}></img></div></>
  )
}

export default Loader