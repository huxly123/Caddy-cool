import React, { useContext, useEffect, useState } from 'react'
import style from "./pills_remaining.module.css";
import axios from 'axios';
import { Appcontext } from '../../../context/Appcontext';

function Pillsremining({setremain}) {

    const [dataa, setData] = useState([])
    
        const { change, setChange } = useContext(Appcontext);


//    const [count,setCount]=useState(1)

// add(count)

// sett(setCount)

   useEffect(()=>{
detremain();

   },[change])

   const detremain=async ()=>{
const { data } = await axios.get(
  "https://polar-peak-58924.herokuapp.com/remaining"
);
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
<div className={style.gridflex} key={item.id}>
    <div>
<p>Pill -{item.pill_name} - </p>
<p>{item.time} {item.when}</p>
</div>
<button onClick={async ()=>{
    // const Item=await axios.get(`http://localhost:3002/remaining/${item.id}`);
    // add(Item)
    
    const ele=item;
    await axios.delete(
      `https://polar-peak-58924.herokuapp.com/remaining/${item._id}`
    );
    await axios.post("https://polar-peak-58924.herokuapp.com/taken", ele);
    // setCount(count+1)
            setChange(!change)
}}>Take Pill</button>
</div>
))
}
</div>
        </div>
        </div>
    )
}

export default Pillsremining
