import { Nav_Card } from "./nav_card";
import profile from "./profile.svg"
import "./top.css"
export function Top({name}){
    let times=["08:00 pm","10:00 pm"]
    return<div>
        <h1 id="name">Hi,{name}!</h1>
        <img src={profile} id="img"/>
        <p id="para">Here are your daily reports and activities</p>
        <div style={{display:'flex'}}>
        <Nav_Card styles={{  left: "32px" }} heading={"pills Due"} count={"2"} sub_head={"Due"} time={times}/>
        <Nav_Card styles={{  left: "196px"}} heading={"pills Taken"} count={"3"} sub_head={"Time"} time={times}/>
        </div>
    </div>
}