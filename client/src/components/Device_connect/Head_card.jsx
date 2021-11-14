import "./head_card.css"
export function HeadCard ({data,imgs,order,logos}){

    let title = data[order].title;
   title = title.charAt(0).toUpperCase() + title.slice(1);
    return<div className="head_card">
        <h1 className="heading">{title}</h1>
        <div className="head_img">
            <img src={imgs[data[order].title]} alt="img"/>
        </div>
        <div className="head_text">
             {
                Object.keys(data[order].detailed).map((e)=><div className="display">
                    <div style={{display:"flex"}}>
                    <img src={logos[e]} style={{width:"14px",height:"14px",left:"0px", marginRight:"8px"}} alt="images"/>
                    <div className="text">{e} :  </div>
                    <div className="text" style={{color:"rgba(98, 180, 127, 1)"}}>{data[order].detailed[e]}</div>
                    </div>
                    
                    </div>)
             }
        </div>
    </div>
}