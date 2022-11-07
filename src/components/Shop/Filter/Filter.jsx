import React from 'react'
import s from './Filter.module.scss'
const Filter = (props) => {
    let filterNames = ["All","Winter","Autumn","Summer","Fall"]
    let filterNamesMap = filterNames.map((elem,key) => {
        return <div className={s.box} onClick={() => {props.setFilter(key)}} >{elem}</div>
    })
    return (
    <div className={s.filter}>{filterNamesMap}</div>
  )
}

export default Filter