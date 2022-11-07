import React from 'react'
import Header from '../Header/Header'
import s from './Home.module.scss'
import give from '../../assets/fg.jpg'
import SwiperC from '../Swiper/SwiperC'
import Recomended from '../Recomended/Recomended'
import SpecialOfferBox from '../SpecialOfferBox/SpecialOfferBox'
const Home = () => {  
   return (
    <div> 
      <section className={s.home}>   
      <SwiperC/>
</section>
<section className={s.brands}>
  <div className={s.circle}><img src={give}></img></div>
  <div className={s.circle}><img src={give}></img></div>
  <div className={s.circle}><img src={give}></img></div>
  <div className={s.circle}><img src={give}></img></div>
  <div className={s.circle}><img src={give}></img></div>
  <div className={s.circle}><img src={give}></img></div>
  <div className={s.circle}><img src={give}></img></div>
</section>
<section >
<Recomended/>
</section>
<SpecialOfferBox/>
    </div>
  )
  }
export default Home
