import "./sub_card.css"
export function SubCard ({styles,imgs,data,handleOnclick,order,index}){
      
   let title = data[order].title;
   title = title.charAt(0).toUpperCase() + title.slice(1);
    return<button onClick={()=>{
        handleOnclick(data,Number(index));
    }} className="sub_card" style={styles}>
        <div className="in_sub" id="display">
            <div>
                <img src={imgs[data[order].title]} alt="new"/>
            </div>
            <div className="">
                <h6 id="in_sub_head">{title}</h6>
                <p id="in_sub_text" style={{color:"rgba(98, 180, 127, 1)"}}>Average: {data[order].Average}</p>
            </div>
                
        </div>
    </button>
}