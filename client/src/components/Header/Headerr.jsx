import React from 'react'
import style from "./header.module.css"
import img1 from "./menu.svg"
import img2 from "./bell.svg"
import img3 from "./watch.svg"

function Headerr ()
{
    return (
        <div className={style.headerbody}>
            <div className={style.div1}><img src={img1} alt="menu"></img></div>
            <div>
                <span><img src={img2} alt="bell"></img></span>
                <span><img src={img3} alt="deviceConnect"></img></span>
            </div>
        </div>
    )
}

export default Headerr
