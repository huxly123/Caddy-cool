import style from "./ActiveGroups.module.css";
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ActiveGroupLists } from "./ActiveGroupLists";

function ActiveGroups ()
{
    return (
        <Router>
            <>
                <div className={style.top}>
                    <Link to="/ActiveGroupLists">
                        <span className={style.btnLayout1}>
                            <span className={style.headBtn}>
                                Active Groups
                            </span>
                        </span>
                    </Link>

                    {/* <Link to="/IndividualGroupMembers"> */}
                    <span className={style.btnLayout2}>
                        <span className={style.headBtn}>
                            Activities Planned
                        </span>
                    </span>
                    {/* </Link> */}

                    {/* <span className={style.btn2}>Activities Planned</span> */}
                </div>
                <div className={style.bottom}>
                    <Switch>
                        <Route path="/ActiveGroupLists" exact>
                            <ActiveGroupLists />
                        </Route>
                    </Switch>
                    {/* <div className={style.bottom1}>
                    <Link to="/IndividualGroupMembers"><div className={style.btn3}><h5>Choose Group Manually</h5></div></Link>

                    <div className={style.btn4}><h5>Get Added in a group randomly</h5></div>

                    <div className={style.btn5}><h5>Create a group</h5></div>
                </div> */}
                </div>
            </>
        </Router>
    )
}

export { ActiveGroups }