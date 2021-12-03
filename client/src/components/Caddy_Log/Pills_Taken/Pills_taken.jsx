import React, { useContext, useEffect, useState } from 'react'
import style from "./pills_taken.module.css";
import axios from 'axios';
import { Appcontext } from '../../../context/Appcontext';


function Pillstaken({ settake, neww }) {
    
            const { change } = useContext(Appcontext);


    const [remainData,setRemainData]=useState([]);

    useEffect(()=>{
gettaken()
    },[neww,change])

const gettaken=async ()=>{
const { data } = await axios.get(
  "https://polar-peak-58924.herokuapp.com/taken"
);
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
<div className={style.gridflex} key={item._id}>
    <div>
<p>Pill -{item.pill_name} - </p>
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
