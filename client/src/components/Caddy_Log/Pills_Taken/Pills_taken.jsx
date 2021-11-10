import React from 'react'
import style from "./pills_taken.module.css"

function Pills_taken() {
    return (
        <div className={style.body}>
        <div className={style.flexx}>
            <div style={{fontWeight:"bolder"}}>Pills Remaining</div>
            <div><h6>Date -</h6></div>
        </div>
<div className={style.redline}></div>
        <div className={style.remain}>
            <div className={style.grid}>

<div>Pill 1 </div>

</div>
        </div>
        </div>
    )
}

export default Pills_taken
