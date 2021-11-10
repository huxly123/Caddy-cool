import React from 'react'
// import Footerr from '../../Footer/Footerr'
// import Headerr from '../../Header/Headerr'
import style from "./caddy.module.css"
import Pills_taken from "../Pills_Taken/Pills_taken"

function Caddy ()
{
    return (
        <div className={style.body}>
            {/* <Headerr /> */}
            <div className={style.caddy}>

                <div className={style.top}>
                    <div className={style.caddylog}>My Caddy Log</div>

                    <div className={style.in}><button className={style.pills}>Add Pills</button></div>

                </div>
                <div className={style.line}></div>

<Pills_taken/>

            </div>
            {/* <Footerr /> */}
        </div>
    )
}

// export default Caddy
export { Caddy }
