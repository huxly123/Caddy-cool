import React, { useEffect, useState } from 'react'
import style from "./pills_remaining.module.css";
import axios from 'axios';

function Pills_remining({setremain}) {

   const [dataa,setData]=useState([])

   const [count,setCount]=useState(1)

   useEffect(()=>{
detremain();

   },[count])

   const detremain=async ()=>{
const {data}=await axios.get("http://localhost:3002/remaining");
setData(data)
   }
  
    return (
        <div className={style.body}>
        <div className={style.flexx}>
            <div className={style.pillsfont}>Pills Remaining</div>
            <div><h6 className={style.date}>Date-13/11/21</h6>
           <button className={style.search} onClick={()=>{
setremain(true)
           }}>Search</button></div>
        </div>
<div className={style.redline}></div>
        <div className={style.remain}>
            <div className={style.grid}>
{
dataa.map(item=>(
<div className={style.gridflex}>
    <div>
<p>Pill {item.id}-{item.pill_name} - </p>
<p>{item.time} {item.when}</p>
</div>
<button onClick={async ()=>{
    const ele=item;
    await axios.delete(`http://localhost:3002/remaining/${item.id}`)
    await axios.post("http://localhost:3002/taken",ele)
    setCount(count+1)
}}>Take Pill</button>
</div>
))
}
</div>
        </div>
        </div>
    )
}

export default Pills_remining
