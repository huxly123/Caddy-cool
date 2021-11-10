import { Head_Card } from "./Head_card";
import { Sub_Card } from "./Sub_card";
import "./bottom.css"
import sleep from "./sleep.svg"
import glucose from "./glucose.svg"
import pulse from "./pulse.svg"
import spo2 from "./spo2.svg"
import steps from "./stepcount.svg"


export function Bottom(){
    return<div style={{height:"496px"}}>
        <Head_Card img={pulse}/>
        <Sub_Card styles={{}} img={pulse}/>
        <Sub_Card styles={{left:"196px"}} img={sleep}/>
        <Sub_Card styles={{top: "635px"}} img={spo2}/>
        <Sub_Card styles={{top: "635px",left:"196px"}} img={steps}/>
    </div>
}