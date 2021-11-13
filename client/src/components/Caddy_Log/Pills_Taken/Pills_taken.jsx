import React from 'react'
import style from "./pills_taken.module.css"


function Pills_taken({settake}) {


    
    return (
       <div className={style.body}>
            <div className={style.flexx}>
            <div className={style.pillsfont}>Pills Taken</div>
            <div><h6 className={style.date}>Date-13-11-21</h6>
           <button className={style.search} onClick={()=>{
               settake(true)
           }}>Search</button></div>
        </div>

        <div className={style.greenline}></div>
        <div className={style.remain}>
            <div className={style.grid}>

<div className={style.gridflex}>
    <div>
<p>Pill 1-Glycomet - </p>
<p>9.07 pm</p>
</div>
<button>Pills Taken</button>
</div>





</div>
        </div>
       </div>
    )
}

export default Pills_taken
