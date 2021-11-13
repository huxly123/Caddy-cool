import style from "./ActivitiesPlannedLists.module.css";
// import { Link } from "react-router-dom";
import ActivitiesPlanned1 from "../svg/ActivitiesPlanned1.svg"
import ActivitiesPlanned2 from "../svg/ActivitiesPlanned2.svg"
import ActivitiesPlanned3 from "../svg/ActivitiesPlanned3.svg"
import ActivitiesPlanned4 from "../svg/ActivitiesPlanned4.svg"
import ActivitiesPlanned5 from "../svg/ActivitiesPlanned5.svg"

function ActivitiesPlannedLists ()
{
    return (
        <div style={{ maxHeight: "600px", overflowY: "scroll" }}>
            <div className={style.day}>
                Today
            </div>
            <div className={style.imageContainer}>
                <img onClick={()=>{
                    alert("contest joined")
                }} src={ActivitiesPlanned1} alt="ActivitiesPlanned1" />
            </div>
            <div className={style.imageContainer}>
                <img onClick={()=>{
                    alert("contest joined")
                }} src={ActivitiesPlanned2} alt="ActivitiesPlanned2" />
                <img src={ActivitiesPlanned3} className={style.imageFooter} alt="ActivitiesPlanned3" />
            </div>
            <div onClick={()=>{
                    alert("contest joined")
                }} className={style.imageContainer}>
                <img src={ActivitiesPlanned4} alt="ActivitiesPlanned4" />
                <img src={ActivitiesPlanned5} className={style.imageFooter} alt="ActivitiesPlanned5" />
            </div>
        </div>
    )
}

export { ActivitiesPlannedLists }