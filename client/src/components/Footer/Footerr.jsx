import React from 'react'
import style from "./footer.module.css"
import img1 from "./homeimg.svg"
import img2 from "./groupimg.svg"
import img3 from "./VectorTab1.svg"
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Footerr ()
{
    return (
        <Router>
            <div className={style.footerbody}>
                <Link to="/Main"><div><img src={img1} alt="home"></img></div></Link>
                <Link to="/PeopleConnect"><div><img src={img2} alt="community"></img></div></Link>
                <Link to="/Caddy"><div><img className={style.fix} src={img3} alt="caddy"></img></div></Link>
            </div>
        </Router>
    )
}

export default Footerr
