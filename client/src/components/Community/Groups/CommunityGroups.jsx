import style from "./CommunityGroups.module.css"

function CommunityGroups ()
{
    return (
        <div className={style.body}>
            <div className={style.top}>
                <Link to="/Caddy"><button className={style.but1}>My Groups</button></Link>

                <button className={style.but2}>My Activities</button>
            </div>
            <div className={style.bottom}>
                <div className={style.bottom1}>
                    <Link to="/Caddy"><div className={style.but3}><h4 className={style.addpillss}>Add Pills</h4></div></Link>

                    <div className={style.but4}><h4 className={style.addpillss}>Add Peers</h4></div>
                </div>
            </div>
        </div>
    )
}

export { CommunityGroups }