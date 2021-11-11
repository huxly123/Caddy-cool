import React from 'react'
import style from "./popup_addpill.module.css"


function Popup_addpill({setbtn,btn}) {
    return (btn)?(
       <>
     <div className={style.popupbody}>
        

         <button onClick={()=>{
             setbtn(false)
         }}>close</button>

       
     </div>



       </>
    ):""
}

export default Popup_addpill
