import style from "./Community.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";

function Community ({ img, heading, body })
{

    return (
        <div className={style.card}>
            <div className="card-body">
                <div className={style.card_head}>
                    <div className={style.iconOutline}>
                        <img src={img} className={style.iconGroup} alt="" />
                    </div>
                    <span className={style.headingLayout}>
                        <p className={style.heading}>
                            {heading}
                        </p>
                    </span>

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