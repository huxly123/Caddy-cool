import style from "./ActiveGroupLists.module.css";
import { Link } from "react-router-dom";

function ActiveGroupLists ()
{
    return (
        <div style={{ maxHeight: "600px", overflowY: "scroll" }}>


            <div style={{ height: "800px" }}>

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

                    <div className={style.msgDemoLayout}>
                        <div className={style.msgSender}>
                            <div className={style.msgSenderName}>
                                Jai
                            </div>
                        </div>

                        <div className={style.msgContainer}>
                            <div className={style.msgElement}>
                                Hey! Who is in for a 20 minute workout challenge?
                            </div>
                        </div>
                    </div>

                    <div className={style.joinButton}>
                        <span>
                            Join Group
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

                    <div className={style.joinButton}>
                        <span>
                            Join Group
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

                    <div className={style.joinButton}>
                        <span>
                            Join Group
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { ActiveGroupLists }