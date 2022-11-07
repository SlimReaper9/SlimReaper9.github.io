import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import s from './Recomended.module.scss'
import dior from '../../assets/dior.jpg'
import PDM from '../../assets/PDM.jpg'
import chanel from '../../assets/chanel.jpeg'
import gucci from '../../assets/gucci.webp'
const Recomended = () => {
  
  
    return (
    <div>
        <div className={s.baner}>
        <span>Welcome back.These are recommended for you</span>
    </div>
          <Swiper
   slidesPerView={4}
   spaceBetween={30}
   slidesPerGroup={4}
   loop={true}
   loopFillGroupWithBlank={true}
   pagination={{
     clickable: true,
   }}
   navigation={true}
   modules={[Pagination, Navigation]}
   className={s.slider}
 >
  <SwiperSlide className={s.slide} ><img  src={PDM}></img></SwiperSlide>
   <SwiperSlide className={s.slide}><img  src={chanel}></img></SwiperSlide>
   <SwiperSlide className={s.slide}><img  src={dior}></img></SwiperSlide>
   <SwiperSlide className={s.slide}><img src={gucci}></img></SwiperSlide>
   <SwiperSlide className={s.slide} ><img  src={PDM}></img></SwiperSlide>
   <SwiperSlide className={s.slide}><img  src={chanel}></img></SwiperSlide>
   <SwiperSlide className={s.slide}><img  src={dior}></img></SwiperSlide>
   <SwiperSlide className={s.slide}><img src={gucci}></img></SwiperSlide>

 </Swiper>
 <div className={s.offer}>
  <img src='https://www.theperfumeshop.com/medias/sys_master/root/11677377855518/UK.gif'></img>
 </div>
 </div>
  )
}

export default Recomended