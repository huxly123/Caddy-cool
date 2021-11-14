import React from 'react'
import style from "./taken_popup.module.css";
import close from "../../Popup_addpill/close.svg"

function Taken_popup({takepop,settakepop}) {
    return (takepop)?(
        <div className={style.remainbody}>
<img src={close} onClick={()=>{
    settakepop(false)
}} alt="close"></img>
            <div className={style.wrappper}>
            <input className={style.remaininput} placeholder="Enter Date"></input>
<button className={style.remainbutton} onClick={()=>{
    settakepop(false)
}}>Find</button>
            </div>

        </div>
    ):""
}

export default Taken_popup
