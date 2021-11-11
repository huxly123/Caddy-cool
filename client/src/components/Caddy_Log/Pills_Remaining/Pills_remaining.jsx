import React from 'react'
import style from "./pills_remaining.module.css"

function Pills_remining() {
    return (
        <div className={style.body}>
        <div className={style.flexx}>
            <div className={style.pillsfont}>Pills Remaining</div>
            <div><h6 className={style.date}>Date-25/02/98</h6>
           <button className={style.search}>Search</button></div>
        </div>
<div className={style.redline}></div>
        <div className={style.remain}>
            <div className={style.grid}>

<div className={style.gridflex}>
    <div>
<p>Pill 1-Glycomet - </p>
<p>9.07 pm</p>
</div>
<button>Take Pill</button>
</div>

</div>
        </div>
        </div>
    )
}

export default Pills_remining
