import { useState,useEffect } from "react";
import Pills_front from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import { Caddy } from "./components/Caddy_Log/Caddy/Caddy";
import { PeopleConnect } from "./components/Community/PeopleConnect";
import { Main } from "./components/Main";
import Signin from "./components/SignIn/Signin"
import Signup from "./components/SignUp/Signup"
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import style from "./App.module.css";

// Header Icons
import img1 from "./components/Header/menu.svg"
import img2 from "./components/Header/bell.svg"
import img3 from "./components/Header/watch.svg"
import img4 from "./components/Header/watchinactive.svg"

// Footer Icons
import homeIconActive from "./components/Footer/homeimgactive.svg";
import communityIcon from "./components/Footer/groupimg.svg";
import caddyIcon from "./components/Footer/VectorTab1.svg";

function App (){
  useEffect(()=>{
    setTimeout(()=>{
      setComp("signin")
    },4000)
  },[]);

  const [comp,setComp] = useState("main")
  function changeState(info){
    setComp(info);
  }

  
  if(comp==="main"){
    return(
      <Main/>
    )
  }
  if(comp==="signin"){
    return(
      <Signin changeState={changeState}/>
    )
  }
  if(comp==="signup"){
    return(
      <Signup />
    )
  }
  if(comp==="other"){
  return (
    <Router>
      <div>

        {/* Header */}
            
          
        <Headerr />

        {/* Body */}
        <div className={style.appBody}>

          <Switch>

            {/* <Route path="/Main" exact>
              <Main />
            </Route> */}
           
            
            <Route path="" exact>
              <PeopleConnect />
            </Route>

            <Route path="/Pills_front" exact>
              <Pills_front />
            </Route>

            <Route path="/Caddy" exact>
              <Caddy />
            </Route>

            {/* <Route path="/add_pill" exact>
              <Iframe_addpill />
            </Route> */}

            <Route>
              {/* 404 not found */}
              <SignUp />
            </Route>

          </Switch>

        </div>

        {/* Footer */}
        <div className={style.footerbody}>
          <Link to="/Main"><div><img src={homeIcon} alt="home"></img></div></Link>
          <Link to="/PeopleConnect"><div><img src={communityIcon} alt="community"></img></div></Link>
          <Link to="/Pills_front"><div><img className={style.fix} src={caddyIcon} alt="caddy"></img></div></Link>
        </div>
      </div>
    </Router>
  )
  }
}

export default App;
