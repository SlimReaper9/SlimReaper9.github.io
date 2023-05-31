import React from 'react'
import s from './Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from "swiper";
import SwiperC from '../Swiper/SwiperC'
import Recomended from '../Recomended/Recomended'
import SpecialOfferBox from '../SpecialOfferBox/SpecialOfferBox'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { brandsAPIThunk, perfumeAPIThunk } from '../../redux/perfumeSlice'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
const Home = () => {  
   const brands = useSelector(state => state.allPerfumes.brands)
   const perfumes = useSelector(state => state.allPerfumes.perfumes)
  
   const dispatch = useDispatch()
  useEffect(()=>{
    const data = {
      filter : '',
      page: ''
    }
    dispatch(brandsAPIThunk())
    dispatch(perfumeAPIThunk(data))
  },[])
  
  return (
    <>
    {Object.keys(brands).length === 0 ? <Loader/> : <div> 
      <section className={s.home}>   
      
      <SwiperC/>
      
</section>
<section >
<Swiper   
          slidesPerView={4}   
          spaceBetween={30}
          
          loop={true}
          loopFillGroupWithBlank={true}
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
          modules={[Pagination, Navigation,Autoplay]}
          className={s.brandSlider}
        >
           {brands.map((elem,key) => {
    return <SwiperSlide className={s.box}><Link to={'/brands/' + elem.id}><img src={elem.imageUrl}></img></Link></SwiperSlide>
  })} 

       
        </Swiper>

</section>
<section >
<Recomended perfumes = {perfumes} />
</section>
<SpecialOfferBox/>
    </div>}
    </>
  )
  }
export default Home
