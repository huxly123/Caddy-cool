import style from "./ActiveGroupLists.module.css";
import { Link } from "react-router-dom";

function ActiveGroupLists ()
{
    return (
        <>
            <div className={style.divs}>
                <div className={style.divsHead}>
                    <span className={style.divsHeadLeftLayout}>
                        <span className={style.divsHeadLeftElement}>
                            #TheLaughGang
                        </span>
                    </span>
                    <span className={style.divsHeadRightLayout}>
                        <span className={style.divsHeadRightElement}>
                            Members - 18
                        </span>
                    </span>
                </div>
            </div>

            <div className={style.divs}>
                <div className={style.divsHead}>
                    <span className={style.divsHeadLeftLayout}>
                        <span className={style.divsHeadLeftElement}>
                            #TheOGs
                        </span>
                    </span>
                    <span className={style.divsHeadRightLayout}>
                        <span className={style.divsHeadRightElement}>
                            Members - 18
                        </span>
                    </span>
                </div>
            </div>

            <div className={style.divs}>
                <div className={style.divsHead}>
                    <span className={style.divsHeadLeftLayout}>
                        <span className={style.divsHeadLeftElement}>
                            #F.R.I.E.N.D.S
                        </span>
                    </span>
                    <span className={style.divsHeadRightLayout}>
                        <span className={style.divsHeadRightElement}>
                            Members - 18
                        </span>
                    </span>
                </div>
            </div>

        </>
    )
}

export { ActiveGroupLists }