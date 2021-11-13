import { Bottom } from "./Bottom";
import { Top } from "./Top";
import "./bottom.css"
import "./top.css";


export function Device(){
    return<div style={{height:"684px",backgroundColor:" #FCF2FF",margin:"auto"}}>
        <div className="top">
        <Top/>
        </div>
        <div className="bottom">
        <Bottom/>
        </div>
  
    </div>
}