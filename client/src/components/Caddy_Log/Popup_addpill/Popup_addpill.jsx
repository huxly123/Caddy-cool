import React from 'react'
import style from "./popup_addpill.module.css"
import close from "./close.svg"


function Popup_addpill({setbtn,btn}) {
    return (btn)?(
       <>
     <div className={style.popupbody}>
        
<div className={style.flexwrap}>
    <h5>Name of the pill</h5>
         <button onClick={()=>{
             setbtn(false)
         }}>close</button>

</div>

<input className={style.pillinput} placeholder="Pill Name"></input>

<h5 className={style.startdate}>Start Date</h5>

<input className={style.dateinput} placeholder="Enter Date"></input>

<h5 className={style.duetime}>Due Time for Consumption</h5>

<div className={style.consumeflex}>
<input className={style.consumeinput} placeholder="Enter Time"></input>

<select>
    <option>AM</option>
    <option>PM</option>
</select>
</div>

<button className={style.finishbut}>Add</button>
     </div>



       </>
    ):""
}

export default Popup_addpill
