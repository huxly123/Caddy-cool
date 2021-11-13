import React, { useEffect, useState } from 'react'
import style from "./pills_remaining.module.css";
import axios from 'axios';

function Pills_remining({setremain}) {

   const [dataa,setData]=useState([])

   useEffect(()=>{
detremain();

   },[])

   const detremain=async ()=>{
const {data}=await axios.get("http://localhost:3002/remaining");
setData(data)
   }
  console.log(dataa);
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
<button>Take Pill</button>
</div>
))
}
</div>
        </div>
        </div>
    )
}

export default Pills_remining
