import React, { useContext, useState } from 'react'
import style from "./popup_addpill.module.css"
import close from "./close.svg";
import axios from 'axios';
import { Appcontext } from '../../../context/Appcontext';


function Popupaddpill({ setbtn, btn }) {
    
    const { change, setChange } = useContext(Appcontext);


   

    const [formData, setFormData] = useState({
        id:Date.now(),
        pill_name:"",
        date:"",
        time:"",
       when:""
    })

const handleSubmit=async (e)=>{
e.preventDefault();
await axios.post("https://polar-peak-58924.herokuapp.com/remaining", formData);
alert("added successfull");
setbtn(false)
setChange(!change)
}

const handleChange=(e)=>{
const {name,value}=e.target;
setFormData({
    ...formData,
    [name]:value
})
}



    return (btn)?(
       <>
     <div className={style.popupbody}>
        
<div className={style.flexwrap}>
    <h5>Name of the pill</h5>
         <img src={close} onClick={()=>{
             setbtn(false)
         }} alt="close"></img>

</div>
<form onSubmit={handleSubmit}>
<input type="text" className={style.pillinput} name="pill_name" onChange={handleChange} placeholder="Pill Name"></input>

<h5 className={style.startdate}>Start Date</h5>

<input type="text" className={style.dateinput} name="date" onChange={handleChange} placeholder="Enter Date"></input>

<h5 className={style.duetime}>Due Time for Consumption</h5>

<div className={style.consumeflex}>
<input type="text" className={style.consumeinput} name="time" onChange={handleChange} placeholder="Enter Time"></input>

<select name="when" onChange={handleChange}>
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

export default Popupaddpill
