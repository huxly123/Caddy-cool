import "./sub_card.css"
import sleep from "./sleep.svg"
export function Sub_Card ({styles,img}){
    return<div className="sub_card" style={styles}>
        <div className="in_sub" id="display">
            <div>
                <img src={img}/>
            </div>
            <div style={{marginLeft:"6.5px"}}>
                <h6 id="in_sub_head">pulse</h6>
                <p id="in_sub_text">Average 879</p>
            </div>
                
        </div>
    </div>
}