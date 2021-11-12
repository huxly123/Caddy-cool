import React from 'react'
import style from "./popup_addpill.module.css"
import close from "./close.svg"


function Popup_addpill({setbtn,btn}) {

const handleSubmit=(e)=>{
e.preventDefault();


}

const handleChange=(e)=>{

}

    return (btn)?(
       <>
     <div className={style.popupbody}>
        
<div className={style.flexwrap}>
    <h5>Name of the pill</h5>
         <img src={close} onClick={()=>{
             setbtn(false)
         }}></img>

</div>
<form onSubmit={handleSubmit}>
<input className={style.pillinput} name="pill_name" placeholder="Pill Name"></input>

<h5 className={style.startdate}>Start Date</h5>

<input className={style.dateinput} name="date" placeholder="Enter Date"></input>

<h5 className={style.duetime}>Due Time for Consumption</h5>

<div className={style.consumeflex}>
<input className={style.consumeinput} name="time" placeholder="Enter Time"></input>

<select >
    <option value="AM">AM</option>
    <option value="PM">PM</option>
</select>
</div>

<button className={style.finishbut} type="submit">Add</button>
</form>
     </div>



       </>
    ):""
}

export default Popup_addpill
