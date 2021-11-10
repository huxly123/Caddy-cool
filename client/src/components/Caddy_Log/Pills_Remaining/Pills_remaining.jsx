import React from 'react'
import style from "./pills_remaining.module.css"

function Pills_remining() {
    return (
        <div className={style.body}>
        <div className={style.flexx}>
            <div style={{fontWeight:"bolder"}}>Pills Remaining</div>
            <div><h6>Date -</h6></div>
        </div>
<div className={style.redline}></div>
        <div className={style.remain}>
            <div className={style.grid}>

<div className={style.gridflex}>
<p>Pill 1 -Glycomet</p>
<button>Take Pill</button>
</div>

<div className={style.gridflex}>
<p>Pill 1 -Glycomet</p>
<button>Take Pill</button>
</div>

<div className={style.gridflex}>
<p>Pill 1 -Glycomet</p>
<button>Take Pill</button>
</div>

<div className={style.gridflex}>
<p>Pill 1 -Glycomet</p>
<button>Take Pill</button>
</div>

<div className={style.gridflex}>
<p>Pill 1 -Glycomet</p>
<button>Take Pill</button>
</div>

<div className={style.gridflex}>
<p>Pill 1 -Glycomet</p>
<button>Take Pill</button>
</div>

</div>
        </div>
        </div>
    )
}

export default Pills_remining
