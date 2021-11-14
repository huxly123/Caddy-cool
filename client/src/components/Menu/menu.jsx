import "../Menu/menu.css"
import profile from "../Menu/pic.svg";
import { Link } from "react-router-dom";
export function Menu() {
    let name = localStorage.getItem("userName");
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return <>
        <div className="menu">
            <div style={{ margin: "auto", marginTop: "20px" }}>
                <img src={profile} style={{ marginLeft: "5px" }} alt="menu"/>
                <h1 id="name_akkakkak" style={{ marginLeft: "18px", marginTop: "10px" }}>{name}</h1>
                <div style={{ marginTop: "30px" }}>
                    <h1 id="name_akkakkak">Bio</h1>
                    <p id="bio">Not updated</p>
                    <div>
                        <button id="name_akkakkak"><Link className="link1" to="/signin">Sign Out</Link></button>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <button id="name_akkakkak">Settings</button>
                    </div>
                </div>
            </div>


        </div>
    </>

}