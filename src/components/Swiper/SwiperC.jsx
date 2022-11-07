import React from 'react'
import dior from '../../assets/dior.jpg'
import PDM from '../../assets/PDM.jpg'
import chanel from '../../assets/chanel.jpeg'
import gucci from '../../assets/gucci.webp'
import s from './SwiperC.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade} from 'swiper'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const SwiperC = () => {
  return (
    <Swiper
    modules={[Autoplay,EffectFade]}   
    effect={"fade"}
    loop={true}
    autoplay = {{delay: 5000}}
   spaceBetween={50}
   slidesPerView={1}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >
   <SwiperSlide><img className={s.sliderimg} src={PDM}></img></SwiperSlide>
   <SwiperSlide><img className={s.sliderimg} src={chanel}></img></SwiperSlide>
   <SwiperSlide><img className={s.sliderimg} src={dior}></img></SwiperSlide>
   <SwiperSlide><img className={s.sliderimg} src={gucci}></img></SwiperSlide>
   ...
 </Swiper>
  )
}

export default SwiperC