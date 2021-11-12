import icon1 from './linkdevicons/ion_watch-outline 2.png';
import icon2 from './linkdevicons/ion_watch-outline.png';
import icon3 from './linkdevicons/ion_watch-outline.svg';


const ConnectDevice = ({Before, caddy, setCaddy, cgmd, setCgmd, fitbit, setFitbit}) => {
    return (
        
        <div className="connect">
          <div className="loadingDiv">
          <div className="top">
          <div className="left">
          <img src={icon3} alt="fitbit" className="linkicons" />
          <span className="centeredtext">Fit Bit</span>
          </div>
          <div className="right">
          

          {fitbit?
          <button className="paired" onClick={()=>{ setFitbit(false)}}>Paired</button> 
          :
          <button className="setup" onClick={()=>{ Before("fitbit")}}>Set Up</button>
          } 
          
          </div>
          </div>
          <div className="bottom">Fit Bit is a monitoring device that keeps a tab on your steps, heart rate and oxygen levels among other features. </div>   
          </div>

          <div className="loadingDiv">
          <div className="top">
          <div className="left">
          <img src={icon1} alt="caddy" className="linkicons" />
          <span className="centeredtext">Caddy</span>
          </div>


          <div className="right">

          {caddy?
          <button className="paired" onClick={()=>{ setCaddy(false)}}>Paired</button> 
          :
          <button className="setup" onClick={()=>{  Before("caddy")}}>Set Up</button> 
          }

          </div>
          </div>
          <div className="bottom">Caddy is a digital and electronic device to store your pills, send out an alarm for remembrance and send a notification to your loved ones!   </div>   
          </div>

          <div className="loadingDiv">
          <div className="top">
          <div className="left">
          <img src={icon2} alt="cgmd" className="linkicons" />
          <span className="centeredtext">CGMD</span>
          </div>
          <div className="right">
          

          {cgmd?
          <button className="paired" onClick={()=>{ setCgmd(false)}}>Paired</button> 
          :
          <button className="setup" onClick={()=>{ Before("cgmd")}}>Set Up</button>
          }
          
           </div>
          </div>
          <div className="bottom">Caddy is a digital and electronic device to store your pills, send out an alarm for remembrance and send a notification to your loved ones! </div>   
          </div>
        </div>
    )
}

export default ConnectDevice
