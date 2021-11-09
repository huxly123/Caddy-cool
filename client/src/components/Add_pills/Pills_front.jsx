import React from 'react'
import Footerr from '../Footer/Footerr'
import Headerr from '../Header/Headerr'
import style from "./pills_front.module.css"

function Pills_front() {
    return (
        <div className={style.body}>
           <Headerr/>
           <div className={style.top}>
<button className={style.but1}>Caddy Log</button>

<button className={style.but2}>My Peers</button>
           </div>
           <div className={style.bottom}>
               <div className={style.bottom1}>
<div className={style.but3}><h4>Add Pills</h4></div>

<div className={style.but4}><h4>Add Peers</h4></div>
</div>
           </div>
           <Footerr/>
        </div>
    )
}

export default Pills_front
