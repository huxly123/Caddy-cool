import React, { useState } from 'react'
import style from "./caddy.module.css"
import Pillsremaining from '../Pills_Remaining/Pills_remaining'
import Pillstaken from '../Pills_Taken/Pills_taken'
import Popupaddpill from '../Popup_addpill/Popup_addpill'
import Remainpopup from '../Popup_showpill/Remain_popup/Remain_popup'
import Takenpopup from '../Popup_showpill/Taken_popup/Taken_popup'

// import homeIconInactive from "../../Footer/homeimginactive.svg";
// import groupIconInactive from "../../Footer/groupimginactive.svg";
// import caddyIconActive from "../../Footer/VectorTab1.svg";


function Caddy ()
{

//     const [neww,setnew]=useState(0);
   

   

// function add(count){
// setnew(count)
// }

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



                <Pillsremaining setremain={setremainingpop}  />
            
                <div className={style.wrapper}>
                    <Pillstaken settake={settakenpop} />

                </div>
            </div>
            {/* <Footerr /> */}
            <Popupaddpill setbtn={setbtnpopup} btn={btnpop} >

</Popupaddpill>

<Remainpopup remainpop={remainingpop} setremainpop={setremainingpop}>

</Remainpopup>

<Takenpopup takepop={takenpop} settakepop={settakenpop}>

</Takenpopup>
        </div >

    )
}

// export default Caddy
export { Caddy }
