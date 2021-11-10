import style from "./Community.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";

function Community ({ img, heading, body })
{

    return (
        <div className={style.card}>
            <div className="card-body">
                {/* <div className="card-title">
                    <div className="start">
                        <img src={img} alt="community-logo" className="me-3" />
                        <h4 >
                            {heading}
                        </h4>
                    </div>
                    <div className="end">

                    </div>
                </div> */}
                <div className={style.card_head}>
                    <div className={style.iconOutline}>
                        <img src={img} className={style.iconGroup} alt="" />
                        <span className={style.headingLayout}>
                            <p className={style.heading}>
                                {heading}
                            </p>
                        </span>
                    </div>

                    <div className={style.buttonLayout}>
                        <button>Connect</button>
                    </div>
                </div>

                <div className={style.cardDescription}>
                    <p className={style.cardText}>
                        {body}
                    </p>

                </div>
            </div>
        </div>
    );
}

export { Community };