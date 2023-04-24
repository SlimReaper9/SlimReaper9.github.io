import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import s from './Recomended.module.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Recomended = (props) => {
  const menu = useSelector(state => state.allPerfumes.menu)
  
    return (
    <div style={menu ==true ? {display: 'none'} : {display: ''}}>
        <div className={s.baner}>
        <span>Welcome back.These are recommended for you</span>
    </div>
          <Swiper
          
   slidesPerView={3}
   spaceBetween={30}
   slidesPerGroup={4}
   loop={true}
   loopFillGroupWithBlank={true}
   pagination={{
     clickable: true,
   }}
   breakpoints={{
    401: {
      slidesPerView:3,
      slidesPerGroup:3
    },
    576: {
      slidesPerView:4,
      slidesPerGroup:4
    }
  }}
   navigation={true}
   modules={[Pagination, Navigation]}
   className={s.slider}
 >
  
   {props.perfumes.map((elem,key) => {
    if(elem.rating >= 9){
      return <SwiperSlide className={s.slide}><div className={s.box}><Link to={'/perfumeDetail/' + elem.id}><img src={elem.imageUrl}></img><span>{elem.title}</span><span>{elem.price} $</span></Link></div></SwiperSlide>
    }
   
   })}

 </Swiper>
 <div className={s.offer}>
  <img src='https://www.theperfumeshop.com/medias/sys_master/root/11677377855518/UK.gif'></img>
 </div>
 </div>
  )
}

export default Recomended