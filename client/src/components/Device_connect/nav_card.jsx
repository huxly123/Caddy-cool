import "./nav_card.css"
export function NavCard ({styles,heading,count,sub_head,time}){
    return<div className="nav_card" style={styles}>
        <div className="in_nav">
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 id="in_nav_main_heading">{heading}</h1>
                <h1 id="in_nav_main_heading">{count}</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <span id="in_nav_sub_text">{sub_head}</span>
                <span id="in_nav_sub_text">{time[0]}</span>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
               <span id="in_nav_sub_text">{sub_head}</span>
               <span id="in_nav_sub_text">{time[1]}</span>
            </div>
            
        </div>
    </div>
}