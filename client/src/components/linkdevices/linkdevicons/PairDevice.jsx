import icon1 from './ion_watch-outline 2.png';
import icon2 from './ion_watch-outline.png';
import icon3 from './ion_watch-outline.svg';

export default function PairDevice({setAfterload,device,pair}){
    return(
        <>
        <div id="overlay"> 
        <div className="loadingDiv2 pd">
        <div className="bar2 pdbar">
        <img src={device==="Caddy"?icon1:device==="Fit Bit"?icon3:icon2} alt="devices" className="icn"/>       
        </div> 
            <p className="namePD1">Found {device} 1</p>
        <div className="top2">
        <div className="left2"><button className="cancel" onClick={()=>setAfterload(false)}>Cancel</button> </div>
        <div className="right2"><button className="search" onClick={()=>pair(device)}>Pair</button> </div>
        </div>
        </div>
        </div>
        </>
    )
}