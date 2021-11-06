import React from 'react'
import style from "./footer.module.css"
import img1 from "./homeimg.svg"
import img2 from "./groupimg.svg"

function Footer() {
    return (
        <div className={style.footerbody}>
            <div><img src={img1} alt="img"></img></div>
            <div><img src={img2} alt="img"></img></div>
            <div><img src={img1} alt="img"></img></div>
        </div>
    )
}

export default Footer
