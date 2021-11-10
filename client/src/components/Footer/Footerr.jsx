import React from 'react'
import style from "./footer.module.css"
import img1 from "./homeimg.svg"
import img2 from "./groupimg.svg"
import img3 from "./VectorTab1.svg"
import img4 from "./Vector.svg"
import { PeopleConnect } from "../Community/PeopleConnect";
import { Main } from "../Main";
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from "../../App.module.css";
function Footerr ()
{
    return (
        <Router>
            <div className={style.footerbody}>
                <Link to="/Main"><div><img src={img1} alt="home"></img></div></Link>
                <Link to="/PeopleConnect"><div><img src={img2} alt="community"></img></div></Link>
                <div><img className={style.fix} src={img3} alt="caddy"></img></div>
            </div>

            {/* <div className={styles.appBody}>
                <Switch>
                    <Route path="/Main" exact>
                        <Main />
                    </Route>

                    <Route path="/PeopleConnect">
                        <PeopleConnect />
                    </Route>

                    <Route>404 not found</Route>
                </Switch>
                {/* <Pills_front/> */}
            {/* <Device /> */}
            {/* <Caddy /> */}
            {/* <PeopleConnect /> */}
            {/* <Main /> * /}
            </div> */}
        </Router>
    )
}

export default Footerr
