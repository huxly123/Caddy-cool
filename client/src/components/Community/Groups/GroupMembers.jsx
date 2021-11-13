import style from "./GroupMembers.module.css";
import memberLists from "../svg/memberLists.svg"

function GroupMembers ()
{

    return (
        <>
            <div className={style.heading}>
                #TheLaughGang
            </div>
            <div className={style.divButtonLayout}>
                <div className={style.divButton}>
                    Join Group
                </div>
            </div>
            <div>
                <img src={memberLists} alt="" />
            </div>
        </>

    )
}

export { GroupMembers }