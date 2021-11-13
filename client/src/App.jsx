import { useState, useEffect, useRef } from "react";
import Pills_front from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import { Caddy } from "./components/Caddy_Log/Caddy/Caddy";
import { PeopleConnect } from "./components/Community/PeopleConnect";
import { Main } from "./components/Home/Main";
import Signin from "./components/SignIn/Signin"
import Signup from "./components/SignUp/Signup";
import { CommunityGroups } from "./components/Community/Groups/CommunityGroups";
import { ActiveGroups } from "./components/Community/Groups/ActiveGroups";
import { GroupMembers } from "./components/Community/Groups/GroupMembers.jsx";
import LinkDevice from './components/linkdevices/LinkDevice'

import {
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
import Render from "./components/Render/Render";
// import Headerrr from "./components/Header/Header";


function App() {
  const handle_user_name = (data) => {
    localStorage.setItem("userName", data);
  }
  return (
    <Router>
      <div>

        {/* header */}
        <div className={style.headerbody}>
          <div className={style.div1}><img src={img1} alt="menu"></img></div>
          <div>
            <span><img src={img2} alt="bell"></img></span>

            <Link to="/linkdevice"><span><img src={img4} alt="deviceConnect"></img></span></Link>
          </div>
        </div>

        {/* Body */}
        <div className={style.appBody}>

          <Switch>
            <Route path="/" exact>
              <Render />
            </Route>

            <Route path="/signin" exact>
              <Signin handle_user_name={handle_user_name} />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/Home" exact>
              <Device/>
            </Route>

            <Route path="/PeopleConnect" exact>
              <PeopleConnect />
            </Route>

            <Route path="/CommunityGroups" exact>
              <CommunityGroups />
            </Route>

            <Route path="/ActiveGroups" exact>
              <ActiveGroups />
            </Route>

            <Route path="/GroupMembers" exact>
              <GroupMembers />
            </Route>

            <Route path="/Pills_front" exact>
              <Pills_front />
            </Route>

            <Route path="/Caddy" exact>
              <Caddy />
            </Route>

            <Route path="/linkdevice" exact>
              <LinkDevice />
            </Route>



            <Route>
              {/* 404 not found */}
              <Device />
            </Route>

          </Switch>

        </div>

        {/* Footer */}
        <div className={style.footerbody}>
          <Link to="/Home">
            <div>
              <img src={homeIconActive} id="homeicon" alt="home"></img>
            </div>
          </Link>
          <Link to="/PeopleConnect">
            <div>
              <img src={communityIcon} id="communityicon" alt="community"></img>
            </div>
          </Link>
          <Link to="/Pills_front">
            <div>
              <img className={style.fix} src={caddyIcon} id="caddyicon" alt="caddy"></img>
            </div>
          </Link>
        </div >

      </div >
    </Router >
  );

}

export default App;
