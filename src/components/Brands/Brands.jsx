import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { brandsAPIThunk } from '../../redux/perfumeSlice'
import BrandBlock from './BrandBlock/BrandBlock'
import s from './Brands.module.scss'
const Brands = () => {
  let brandsList = useSelector(state => state.allPerfumes.brands)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(brandsAPIThunk())
  }, [])
  
  return (
    <section>
      <div className={s.h1}><span>choose one of our exclusive brands</span></div>
      <div className={s.block}>
        {brandsList.map((elem,key) => {
          return <BrandBlock {...elem}/>
        })}
      </div>
    </section>
  )
}

export default Brands