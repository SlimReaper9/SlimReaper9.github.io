import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import s from './BrandPage.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,Link } from 'react-router-dom'
import { brandDetailApiThunk, removeBrandOrPerfume ,getBrandPerfume} from '../../../redux/perfumeSlice'
import Loader from '../../Loader/Loader';
const BrandPage = () => {
  const {id} = useParams()
  const brandDetail = useSelector(state => state.allPerfumes.brandDetail)
  const brandPerfume = useSelector (state => state.allPerfumes.brandPerfume)
  const dispatch = useDispatch();
  useEffect(() => {
  
    dispatch(brandDetailApiThunk(id))
    dispatch(getBrandPerfume(id))
    return () => {
      dispatch(removeBrandOrPerfume())
    }
  }, [id])
 
    return (
    <div>{Object.keys(brandDetail).length === 0 ? <Loader/> : 
    <>
      <div className={s.titleHeader}><img src={brandDetail[0].imageUrl}></img></div>
      <div className={s.ad}><div className={s.perfumes}>
        <span>{brandDetail[0].title} FOR MEN</span>
        {brandPerfume.map((elem,key) => {
          return <Link to={'/perfumeDetail/' + elem.id}>{elem.designer} {elem.title}</Link>
        })}
        </div><img src={brandDetail[0].ad}></img></div>
         <div className={s.baner}><span>Bestsellers</span></div>
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
    301: {
      slidesPerView:2,
      slidesPerGroup:2
    },
    576: {
      slidesPerView:3,
      slidesPerGroup:3
    }
  }}
   navigation={true}
   modules={[Pagination, Navigation]}
   className={s.slider}
 >
  
   {brandPerfume.map((elem,key) => {
    
      return <SwiperSlide className={s.slide}><div className={s.box}><Link to={'/perfumeDetail/' + elem.id}><img src={elem.imageUrl}></img><span>{elem.title}</span><span>{elem.price} $</span></Link></div></SwiperSlide>
    
   
   })}

 </Swiper>
 <div className={s.baner}><span>About {brandDetail[0].title}</span></div>
 <div className={s.about}>{brandDetail[0].about}</div>
       </>}</div>
  )
}

export default BrandPage