import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { perfumeAPIThunk } from '../../redux/perfumeSlice'
import PerfumeBlock from './PerfumeBlock/PerfumeBlock'
import s from './Shop.module.scss'
import { useEffect } from 'react'
import Filter from './Filter/Filter'
import { setFilter } from '../../redux/filterSlice'
const Shop = () => {
  let perfumes = useSelector(state => state.allPerfumes.perfumes)
  let dispatch = useDispatch();
  let filter = useSelector(state => state.filter.filterId)
  useEffect(() => {
    let data = {
      filter
    }
    dispatch(perfumeAPIThunk(data))
  }, [filter])
 
  let perfumeMap = perfumes.map((elem,id) => {
    return <PerfumeBlock {...elem}></PerfumeBlock>
  })
  return (
    <section>
      <div className={s.baner}>
        <span>Try out our best fragrance's</span>
      </div>
      <Filter setFilter = {(id) => {dispatch(setFilter(id))}}></Filter>
      <div className={s.shop}>
          {perfumeMap}
      </div>
    </section>
  )
}

export default Shop