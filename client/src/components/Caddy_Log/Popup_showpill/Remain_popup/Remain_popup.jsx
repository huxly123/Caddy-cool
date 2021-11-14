import React from 'react';
import style from "./remain_popup.module.css"
import close from "../../Popup_addpill/close.svg"

function Remain_popup({remainpop,setremainpop}) {
    return (remainpop)?(
        <div className={style.remainbody}>
<img src={close} onClick={()=>{
    setremainpop(false)
}} alt="close"></img>
            <div className={style.wrappper}>
            <input className={style.remaininput} placeholder="Enter Date"></input>
<button className={style.remainbutton} onClick={()=>{
    setremainpop(false)
}}>Find</button>
            </div>

        </div>
    ):""
}

export default Remain_popup
