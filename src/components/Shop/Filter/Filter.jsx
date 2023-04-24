import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../../../redux/perfumeSlice'
import s from './Filter.module.scss'
const Filter = (props) => {
  const dispatch= useDispatch();
  const filterNames = [{id:0,name:"All",
    count: 43},{id:1,name:"Winter",count:14},{id:2,name:"Spring",count:10 },
    {id:3,name:"Summer",count:11},{id:4,name:"Fall",count:13}]
    const filterNamesMap = filterNames.map((elem,key) => {
        return <div className={s.box} onClick={() => {props.setFilter([elem.id , elem.count]);dispatch(setPage(1))}} >{elem.name}</div>
    })
    return (
    <div className={s.filter}>{filterNamesMap}</div>
  )
}

export default Filter