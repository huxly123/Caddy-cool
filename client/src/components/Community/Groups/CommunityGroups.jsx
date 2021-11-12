import style from "./CommunityGroups.module.css"
import { Link } from 'react-router-dom'

function CommunityGroups ()
{
    return (
        <div className={style.body}>
            <div className={style.top}>
                <Link to="/ActiveGroups"><button className={style.btn1}>My Groups</button></Link>

                <button className={style.btn2}>My Activities</button>
            </div>
            <div className={style.bottom}>
                <div className={style.bottom1}>
                    <Link to="/ActiveGroups"><div className={style.btn3}><h5>Choose Group Manually</h5></div></Link>

                    <div className={style.btn4}><h5>Get Added in a group randomly</h5></div>

                    <div className={style.btn5}><h5>Create a group</h5></div>
                </div>
            </div>
        </div>
    )
}

export { CommunityGroups }