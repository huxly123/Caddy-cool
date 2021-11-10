import "./head_card.css"
export function Head_Card ({img}){
    return<div className="head_card">
        <div className="head_img">
            <img src={img}/>
        </div>
        <div className="head_text"></div>
    </div>
}