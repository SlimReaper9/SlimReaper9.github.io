import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { perfumeAPIThunk, setPage } from '../../redux/perfumeSlice'
import PerfumeBlock from './PerfumeBlock/PerfumeBlock'
import s from './Shop.module.scss'
import { useEffect } from 'react'
import Filter from './Filter/Filter'
import { setFilter } from '../../redux/filterSlice'

const Shop = () => {
  let perfumes = useSelector(state => state.allPerfumes.perfumes)
  const menu = useSelector(state => state.allPerfumes.menu)
  let dispatch = useDispatch();
  let filter = useSelector(state => state.filter.filterId)
  let count = useSelector(state => state.filter.count)
  let page = useSelector (state => state.allPerfumes.currentPage)
  useEffect(() => {
    let data = {
      filter,
      page 
    }
    dispatch(perfumeAPIThunk(data))
   
  }, [filter,page])
  debugger
  let scrollTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 }
  let perfumeMap = perfumes.map((elem,id) => {
    return <PerfumeBlock {...elem}></PerfumeBlock>
  })
  let totalPages = Math.ceil(count/ 8)
  let pages = []
  for(let i = 1;i<=totalPages;i++) {
    pages.push(i)
  }
  return (
    <section style={menu ==true ? {display: 'none'} : {display: ''}}>
      <div className={s.baner}>
        <span>Try out our best fragrance's</span>
      </div>
      <Filter setFilter = {(id) => {dispatch(setFilter(id))}}></Filter>
      <div className={s.shop}>
          {perfumeMap}
      </div>
      <div className={s.pagination}>{pages.map(elem => {
        return <div onClick={() => {dispatch(setPage(elem));scrollTop()}} style={page == elem ? {background: '#463f3a',color: 'white'} : {background:'none'}}>{elem}</div>
      })}</div>
    </section>
  )
}

export default Shop