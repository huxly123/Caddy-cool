import style from "./Community.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Community ({ img, heading, body })
{

    return (
        <div className={style.card}>
            <div className="card-body">
                <h5 className="card-title">
                    {heading}
                </h5>
                <p className="card-text">
                    {body}
                </p>
            </div>
        </div>
    );
}

export { Community };