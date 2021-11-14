import React, { useEffect, useState } from 'react'
import style from "./pills_taken.module.css";
import axios from 'axios';


function Pillstaken({settake,neww}) {

    const [remainData,setRemainData]=useState([]);

    useEffect(()=>{
gettaken()
    },[neww])

const gettaken=async ()=>{
const {data}=await axios.get("http://localhost:3002/taken");
setRemainData(data)
}

    return (
       <div className={style.body}>
            <div className={style.flexx}>
            <div className={style.pillsfont}>Pills Taken</div>
            <div><h6 className={style.date}>Date-13/11/21</h6>
           <button className={style.search} onClick={()=>{
               settake(true)
           }}>Search</button></div>
        </div>

        <div className={style.greenline}></div>
        <div className={style.remain}>
            <div className={style.grid}>
{remainData.map((item)=>(
<div className={style.gridflex} key={item.id}>
    <div>
<p>Pill {item.id}-{item.pill_name} - </p>
<p>{item.time} {item.when}</p>
</div>
<button>Pills Taken</button>
</div>
))
}



</div>
        </div>
       </div>
    )
}

export default Pillstaken
