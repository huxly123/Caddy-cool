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
<button className={style.but3}>Add Pills</button>

<button className={style.but4}>Add Peers</button>
</div>
           </div>
           <Footerr/>
        </div>
    )
}

export default Pills_front
