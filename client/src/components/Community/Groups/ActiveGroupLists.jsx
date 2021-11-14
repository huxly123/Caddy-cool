import style from "./ActiveGroupLists.module.css";
import { Link } from "react-router-dom";
import sad from "./Emojis/sadEmoji.svg"
import smiliEmogi from "./Emojis/smiliEmogi.svg"
import LikeEmoji from "./Emojis/likeEmoji.svg"
import LoveEmoji from "./Emojis/loveEmoji.svg"

function ActiveGroupLists ()
{
    return (
        <div style={{ maxHeight: "600px", overflowY: "scroll" }}>


            <div style={{ height: "800px" }}>

            <Link to="/GroupMembers"> 
                    <div className={style.firstDiv}>
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

                        {/* <div className={style.msgDemoLayout}>
                        <div className={style.msgSender}>
                            <div className={style.msgSenderName}>
                                Jai
                            </div>
                        </div>

                        <div className={style.msgContainer} style={{ marginTop: "40px" }}>
                            <div className={style.msgElement}>
                                Hey! Who is in for a 20 minute workout challenge?
                                <img src={loveEmogi} alt="Love Emoji" />
                            </div>
                        </div>
                    </div> */}
                        <div className={style.msgDemoLayout}>
                            <div className={style.msgSender}>
                                <div className={style.msgSenderName}>
                                    Ragini
                                </div>
                            </div>

                            <div className={style.msgContainer}>
                                <div className={style.msgElement}>
                                    Let's Do this!
                                    <img src={smiliEmogi} alt="smile" />
                                </div>
                            </div>
                        </div>
                        <div className={style.msgDemoLayout}>
                            <div className={style.msgSender}>
                                <div className={style.msgSenderName}>
                                    Dev
                                </div>
                            </div>

                            <div className={`${style.msgContainer} ${style.test}`}>
                                <div className={style.msgElement}>
                                    I only have the evening free.
                                    <img src={sad} alt="sad Emoji" />
                                </div>
                            </div>
                        </div>

                        <div className={style.joinButton}>
                         <span>
                             Join Group
                            </span>
                        </div>
                    </div>
                    </Link>

                <Link to="/GroupMembers">
                    <div className={style.secondDiv}>
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

                        <div className={style.msgDemoLayout}>
                            <div className={style.msgSender}>
                                <div className={style.msgSenderName}>
                                    Kapila
                                </div>
                            </div>

                            <div className={style.msgContainer}>
                                <div className={style.msgElement}>
                                    Let's Do this!
                                    <img src={LikeEmoji} alt="Like" />
                                </div>
                            </div>
                        </div>
                        <div className={style.msgDemoLayout}>
                            <div className={style.msgSender}>
                                <div className={style.msgSenderName}>
                                    Dev
                                </div>
                            </div>

                            <div className={`${style.msgContainer} ${style.test}`}>
                                <div className={style.msgElement}>
                                    I only have the evening free.
                                    <img src={sad} alt="sad Emoji" />
                                </div>
                            </div>
                        </div>

                        <div className={style.joinButton}>
                            <span>
                                Join Group
                            </span>
                        </div>
                    </div>
                </ Link>

                <Link to="/GroupMembers">
                    <div className={style.thirdDiv}>
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

                        <div className={style.msgDemoLayout}>
                            <div className={style.msgSender}>
                                <div className={style.msgSenderName}>
                                    Ashutosh
                                </div>
                            </div>

                            <div className={style.msgContainer}>
                                <div className={style.msgElement}>
                                    Let's Do this!
                                    <img src={LoveEmoji} alt="Love Emoji" />
                                </div>
                            </div>
                        </div>
                        <div className={style.msgDemoLayout}>
                            <div className={style.msgSender}>
                                <div className={style.msgSenderName}>
                                    Dev
                                </div>
                            </div>

                            <div className={`${style.msgContainer} ${style.test}`}>
                                <div className={style.msgElement}>
                                    I only have the evening free.
                                    <img src={sad} alt="sad Emoji" />
                                </div>
                            </div>
                        </div>

                        <div className={style.joinButton}>
                            <span>
                                Join Group
                            </span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export { ActiveGroupLists }