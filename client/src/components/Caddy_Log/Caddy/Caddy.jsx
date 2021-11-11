import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./caddy.module.css"
import Pills_remaining from '../Pills_Remaining/Pills_remaining'
import Pills_taken from '../Pills_Taken/Pills_taken'


function Caddy ()
{

const [frame,setframe]=useState(false)

const handletrue=()=>{
    setframe(true)
}

    return (
        <div className={style.body}>
            {/* <Headerr /> */}
            <div className={style.caddy}>

                <div className={style.top}>
                    <div className={style.caddylog}>My Caddy Log</div>

                <div className={style.in}><button onClick={handletrue} className={style.pills}>Add Pills</button></div>

                </div>
                <div className={style.line}></div>

               

<Pills_remaining/>
{frame?
<iframe className={style.iframee} src="/add_pill"></iframe>:null

}
<div className={style.wrapper}>
<Pills_taken/>

</div>
            </div>
            {/* <Footerr /> */}
        
        </div>

    )
}

// export default Caddy
export { Caddy }
