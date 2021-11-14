import { Bottom } from "./Bottom";
import { Top } from "./Top";
// import axios from "axios";
import "./bottom.css"
import "./top.css";

import homeIconActive from "../Footer/homeimgactive.svg";
import groupIconInactive from "../Footer/groupimginactive.svg";
import caddyIconInactive from "../Footer/Vector.svg";

// import { useEffect, useState } from "react";
// import Headerrr from "../Header/Header";
import "./top.css"
// import { useEffect, useState } from "react";

export function Device() {

    let name = localStorage.getItem("userName");
    // const [name , setName] = useState("");
    // const [flag, setFlag] = useState(false);

    // useEffect(()=>{
    //     try{
    //        axios.get("http://localhost:3001/user")
    //         .then((res)=>{
    //             let name = res.data[0].name;
    //             name = name.charAt(0).toUpperCase() + name.slice(1);
    //             name=name.split(" ")[0]

    //             setName(name)
    //             setFlag(true);
    //         })
    //     }catch(err){
    //         console.log(err);
    //     }

    // },[])


    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.split(" ")[0];

    document.getElementById("homeicon").src = `${ homeIconActive }`;
    document.getElementById("communityicon").src = `${ groupIconInactive }`;
    document.getElementById("caddyicon").src = `${ caddyIconInactive }`;

    return <div>

        <div style={{ height: "684px", backgroundColor: " #FCF2FF", margin: "auto" }}>
            <div className="top">
                <Top name={name} />
            </div>
            <div className="bottom">
                <Bottom />
            </div>

        </div>
    </div>

}