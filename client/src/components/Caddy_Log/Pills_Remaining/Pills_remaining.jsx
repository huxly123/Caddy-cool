import React, { useState } from 'react'
import style from "./pills_remaining.module.css";
import axios from 'axios';

function Pills_remining({setremain}) {

   const [data,setData]=useState("")

   const detremain=async ()=>{

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
<div className={style.gridflex}>
    <div>
<p>Pill 1-Glycomet - </p>
<p>9.07 pm</p>
</div>
<button>Take Pill</button>
</div>

}
</div>
        </div>
        </div>
    )
}

export default Pills_remining
