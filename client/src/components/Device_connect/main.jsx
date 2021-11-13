import { Bottom } from "./Bottom";
import { Top } from "./Top";
import axios from "axios";
import "./bottom.css"
import "./top.css";

import "./top.css"
import { useEffect, useState } from "react";

export function Device(){

    const [name , setName] = useState("");
    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        try{
           axios.get("http://localhost:3001/user")
            .then((res)=>{
                let name = res.data[0].name;
                name = name.charAt(0).toUpperCase() + name.slice(1);
                setName(name)
                setFlag(true);
            })
        }catch(err){
            console.log(err);
        }
      
    },[])

    return<div>
        {
            flag === true ?   <div style={{height:"684px",backgroundColor:" #FCF2FF",margin:"auto"}}>
            <div className="top">
            <Top name={name}/>
            </div>
            <div className="bottom">
            <Bottom/>
            </div>
      
        </div> : <div></div>
        }
    </div>
  
}