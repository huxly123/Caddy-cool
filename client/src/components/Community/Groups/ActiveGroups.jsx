import style from "./ActiveGroups.module.css";
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ActiveGroupLists } from "./ActiveGroupLists";
import { ActivitiesPlannedLists } from "./ActivitiesPlannedLists";
// import App from "../../../App"

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

                    <Link to="/ActivitiesPlannedLists">
                        <span className={style.btnLayout2}>
                            <span className={style.headBtn}>
                                Activities Planned
                            </span>
                        </span>
                    </Link>

                </div>

                <div className={style.bottom}>
                    <Switch>

                        <Route path="/ActiveGroupLists" exact>
                            <ActiveGroupLists />
                        </Route>

                        <Route path="/ActivitiesPlannedLists" exact>
                            <ActivitiesPlannedLists />
                        </Route>

                        <Route>
                            {/* <App /> */}
                            <ActiveGroupLists />
                        </Route>

                    </Switch>
                </div>
            </>
        </Router>
    )
}

export { ActiveGroups }