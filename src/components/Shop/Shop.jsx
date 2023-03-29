import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { perfumeAPIThunk, setPage } from '../../redux/perfumeSlice'
import PerfumeBlock from './PerfumeBlock/PerfumeBlock'
import s from './Shop.module.scss'
import { useEffect } from 'react'
import Filter from './Filter/Filter'
import { setFilter } from '../../redux/filterSlice'
import Loader from '../Loader/Loader'

const Shop = () => {
  const perfumes = useSelector(state => state.allPerfumes.perfumes)
  const menu = useSelector(state => state.allPerfumes.menu)
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filterId)
  const count = useSelector(state => state.filter.count)
  const page = useSelector (state => state.allPerfumes.currentPage)
  useEffect(() => {
    const data = {
      filter,
      page 
    }
    dispatch(perfumeAPIThunk(data))
   
  }, [filter,page])
  debugger
  const scrollTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 }
 const perfumeMap = perfumes.map((elem,id) => {
    return <PerfumeBlock {...elem}></PerfumeBlock>
  })
  const totalPages = Math.ceil(count/ 8)
  const pages = []
  for(let i = 1;i<=totalPages;i++) {
    pages.push(i)
  }
  return (
    <section style={menu ==true ? {display: 'none'} : {display: ''}}>
      {Object.keys(perfumes).length === 0 ? <Loader/> : <><div className={s.baner}>
        <span>Try out our best fragrance's</span>
      </div>
      <Filter setFilter = {(id) => {dispatch(setFilter(id))}}></Filter>
      <div className={s.shop}>
          {perfumeMap}
      </div>
      <div className={s.pagination}>{pages.map(elem => {
        return <div onClick={() => {dispatch(setPage(elem));scrollTop()}} style={page == elem ? {background: '#463f3a',color: 'white'} : {background:'none'}}>{elem}</div>
      })}</div></>}
    </section>
  )
}

export default Shop