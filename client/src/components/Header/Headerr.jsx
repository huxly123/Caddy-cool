import React from 'react'
import style from "./header.module.css"
import img1 from "./menu.svg"
import img2 from "./bell.svg"
import img3 from "./watch.svg"

function Headerr() {
    return (
        <div>
            <div className={style.headerbody}>
            <div className={style.div1}><img src={img1} alt="img"></img></div>
            <div>
            <span><img src={img2} alt="img"></img></span>
            <span><img src={img3} alt="img"></img></span>
            </div>
        </div>
        </div>
    )
}

export default Headerr
