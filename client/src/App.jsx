import Pills_front from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import Footerr from "./components/Footer/Footerr";
import Headerr from "./components/Header/Headerr";
import { Caddy } from "./components/Caddy_Log/Caddy/Caddy";
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
import styles from "./components/Footer/footer.module.css";
import homeIcon from "./components/Footer/homeimg.svg";
import communityIcon from "./components/Footer/groupimg.svg";
import caddyIcon from "./components/Footer/VectorTab1.svg";


function App ()
{
  return (
    <Router>
      <div className={style.appHeight}>

        {/* Header */}
        <Headerr />

        <div className={style.appBody}>

          <Switch>

            <Route path="/Main" exact>
              <Main />
            </Route>

            <Route path="/PeopleConnect" exact>
              <PeopleConnect />
            </Route>

            <Route path="/Caddy" exact>
              <Caddy />
            </Route>

            <Route>404 not found</Route>

          </Switch>

        </div>

        {/* Footer */}
        <div className={styles.footerbody}>
          <Link to="/Main"><div><img src={homeIcon} alt="home"></img></div></Link>
          <Link to="/PeopleConnect"><div><img src={communityIcon} alt="community"></img></div></Link>
          <Link to="/Caddy"><div><img className={style.fix} src={caddyIcon} alt="caddy"></img></div></Link>
        </div>

      </div>
    </Router>
  );
}

export default App;
