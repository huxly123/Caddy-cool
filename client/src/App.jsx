import Pills_front from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import Footerr from "./components/Footer/Footerr";
import Headerr from "./components/Header/Headerr";
import Caddy from "./components/Caddy_Log/Caddy/Caddy";
import { PeopleConnect } from "./components/Community/PeopleConnect";
import { Main } from "./components/Main";
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import style from "./App.module.css";


function App ()
{
  return (
    <Router>
      <div className={style.appHeight}>
        <Headerr />
        <div className={style.appBody}>
          {/* <Switch>
            <Route path="/Main" exact>
              <Main />
            </Route>

            <Route path="/PeopleConnect" exact>
              <PeopleConnect />
            </Route>

            <Route>404 not found</Route>
          </Switch> */}
          {/* <Pills_front/> */}
          {/* <Device /> */}
          {/* <Caddy /> */}
          {/* <PeopleConnect /> */}
          {/* <Main /> */}
        </div>
        <Footerr />
      </div>
      {/* // <>

    //   <Caddy />


    // </> */}
    </Router>
  );
}

export default App;
