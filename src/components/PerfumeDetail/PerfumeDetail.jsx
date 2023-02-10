import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom'
import { addComment, commentsApiThunk, perfumeDetailApiThunk, removeBrandOrPerfume } from '../../redux/perfumeSlice';
import s from './PerfumeDetail.module.scss'
import star from '../../assets/star-regular.svg'
import { seasonLogos } from '../../constants/constant';
import franceFlag from '../../assets/france.png'
import italyFlag from '../../assets/italy.png'
const PerfumeDetail = () => {
    let {id} = useParams();
    let dispatch = useDispatch()
    let perfumeDetail = useSelector(state => state.allPerfumes.perfumeDetail)
    let comments = useSelector(state => state.allPerfumes.comments)
    const [comment,setComment] = useState('')
    useEffect(() => {
      dispatch(perfumeDetailApiThunk(id))
      dispatch(commentsApiThunk())
      return () => {
        dispatch(removeBrandOrPerfume())
    }
      
    }, [id])
    let percent = [perfumeDetail.winter,perfumeDetail.spring,perfumeDetail.summer,perfumeDetail.fall,perfumeDetail.day,perfumeDetail.night]   
    return (
    <section>
   <><div className={s.main}>
        <div className={s.info}>
            <Link to={'/brands/' + perfumeDetail.brandId}><div className={s.designer}>{perfumeDetail.designer == "D&G" ? 'Dolce & Gabbana' : perfumeDetail.designer}</div></Link>
            <div className={s.title}>{perfumeDetail.title}</div>
            <div className={s.rating}>{perfumeDetail.rating}<img src={star}></img></div>
            <div className={s.about}>{perfumeDetail.about}</div>
            <div className={s.box}>
                {seasonLogos.map((elem,key) => {
                    return  <div className={s.element}>
                    <img src={elem.logo}></img>
                    <div className={s.vote}>
                        <div className={s.percent} style={{width: percent[key]+"%"}}></div>
                    </div>
                </div>
                })}
            </div>
            <div></div>
        </div>
        <div className={s.imageBox}>
            <img src={perfumeDetail.imageUrl} className={s.perfumeImg}></img>
            <div className={s.country}>{perfumeDetail.country}<img src={perfumeDetail.country == "italy" ? italyFlag : franceFlag}></img></div>
        </div>     
    </div>
    <div className={s.comments}>
            <span>comments</span>
            <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            <div className={s.button} onClick={() => {dispatch(addComment(comment));setComment('')}}>post comment</div>
        {comments.map((elem,key) => {
            return <div className={s.comm}>{elem.text}</div>
        })}
        </div></>
    </section>
  )
}

export default PerfumeDetail