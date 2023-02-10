import React from 'react'
import s from './Home.module.scss'
import SwiperC from '../Swiper/SwiperC'
import Recomended from '../Recomended/Recomended'
import SpecialOfferBox from '../SpecialOfferBox/SpecialOfferBox'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { brandsAPIThunk, perfumeAPIThunk } from '../../redux/perfumeSlice'
import { Link } from 'react-router-dom'
const Home = () => {  
   let brands = useSelector(state => state.allPerfumes.brands)
   let perfumes = useSelector(state => state.allPerfumes.perfumes)
  
   let dispatch = useDispatch()
  useEffect(()=>{
    let data = {
      filter : '',
      page: ''
    }
    dispatch(brandsAPIThunk())
    dispatch(perfumeAPIThunk(data))
  },[])
  
  return (
    <div> 
      <section className={s.home}>   
      
      <SwiperC/>
      
</section>
<section className={s.brands}  >
  {brands.map((elem,key) => {
    return <div className={s.circle}><Link to={'/brands/' + elem.id}><img src={elem.imageUrl}></img></Link></div>
  })} 
</section>
<section >
<Recomended perfumes = {perfumes} />
</section>
<SpecialOfferBox/>
    </div>
  )
  }
export default Home
