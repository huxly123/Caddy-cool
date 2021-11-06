import React from 'react'
import style from "./header.module.css"
import img1 from "./menu.svg"
import img2 from "./bell.svg"
import img3 from "./watch.svg"

function Header() {
    return (
        <div>
            <div className={style.headerbody}>
            <div><img src={img1} alt="img"></img></div>
            <div><img src={img2} alt="img"></img></div>
            <div><img src={img3} alt="img"></img></div>
        </div>
        </div>
    )
}

export default Header
