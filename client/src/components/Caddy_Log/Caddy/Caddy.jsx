import React, { useState } from 'react'
import style from "./caddy.module.css"
import Pills_remaining from '../Pills_Remaining/Pills_remaining'
import Pills_taken from '../Pills_Taken/Pills_taken'
import Popup_addpill from '../Popup_addpill/Popup_addpill'

// import homeIconInactive from "../../Footer/homeimginactive.svg";
// import groupIconInactive from "../../Footer/groupimginactive.svg";
// import caddyIconActive from "../../Footer/VectorTab1.svg";


function Caddy ()
{

    const [btnpop,setbtnpopup]=useState(false)

    const [remainingpop,setremainingpop]=useState(false)

    const [takenpop,settakenpop]=useState(false)
    

    return (
        <div className={style.body}>
            {/* <Headerr /> */}
            <div className={style.caddy}>

                <div className={style.top}>
                    <div className={style.caddylog}>My Caddy Log</div>

                    <div className={style.in}><button onClick={()=>{
                        setbtnpopup(true)
                    }} className={style.pills}>Add Pills</button></div>

                </div >
                <div className={style.line}></div>



                <Pills_remaining />
            
                <div className={style.wrapper}>
                    <Pills_taken />

                </div>
            </div>
            {/* <Footerr /> */}
            <Popup_addpill setbtn={setbtnpopup} btn={btnpop}>

</Popup_addpill>
        </div >

    )
}

// export default Caddy
export { Caddy }
