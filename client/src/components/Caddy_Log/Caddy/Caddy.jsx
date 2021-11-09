import React from 'react'
import Footerr from '../../Footer/Footerr'
import Headerr from '../../Header/Headerr'
import style from "./caddy.module.css"


function Caddy() {
    return (
        <div>
            <Headerr/>
            <div className={style.caddy}>

<div className={style.top}>
<div className={style.caddylog}>My Caddy Log</div>

<div className={style.in}><button className={style.pills}>Add Pills</button></div>
         </div> 
         
           </div>
            <Footerr/>
        </div>
    )
}

export default Caddy
