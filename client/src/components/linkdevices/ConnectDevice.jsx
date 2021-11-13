import icon1 from "./linkdevicons/ion_watch-outline 2.png";
import icon2 from "./linkdevicons/ion_watch-outline.png";
import icon3 from "./linkdevicons/ion_watch-outline.svg";

import './loading.css'

const ConnectDevice = ({
  Before,
  caddy,
  setCaddy,
  cgmd,
  setCgmd,
  fitbit,
  setFitbit,
}) => {
  return (
    <div className="Linkconnect">
      <div className="LinkloadingDiv">
        <div className="Linktop">
          <div className="Linkleft">
            <img src={icon3} alt="fitbit" className="Linklinkicons" />
            <span className="Linkcenteredtext">Fit Bit</span>
          </div>
          <div className="Linkright">
            {fitbit ? (
              <button
                className="Linkpaired"
                onClick={() => {
                  setFitbit(false);
                }}
              >
                Paired
              </button>
            ) : (
              <button
                className="Linksetup"
                onClick={() => {
                  Before("fitbit");
                }}
              >
                Set Up
              </button>
            )}
          </div>
        </div>
        <div className="Linkbottom">
          Fit Bit is a monitoring device that keeps a tab on your steps, heart
          rate and oxygen levels among other features.{" "}
        </div>
      </div>

      <div className="LinkloadingDiv">
        <div className="Linktop">
          <div className="Linkleft">
            <img src={icon1} alt="caddy" className="Linklinkicons" />
            <span className="Linkcenteredtext">Caddy</span>
          </div>

          <div className="Linkright">
            {caddy ? (
              <button
                className="Linkpaired"
                onClick={() => {
                  setCaddy(false);
                }}
              >
                Paired
              </button>
            ) : (
              <button
                className="Linksetup"
                onClick={() => {
                  Before("caddy");
                }}
              >
                Set Up
              </button>
            )}
          </div>
        </div>
        <div className="Linkbottom">
          Caddy is a digital and electronic device to store your pills, send out
          an alarm for remembrance and send a notification to your loved ones!{" "}
        </div>
      </div>

      <div className="LinkloadingDiv">
        <div className="Linktop">
          <div className="Linkleft">
            <img src={icon2} alt="cgmd" className="Linklinkicons" />
            <span className="Linkcenteredtext">CGMD</span>
          </div>
          <div className="Linkright">
            {cgmd ? (
              <button
                className="Linkpaired"
                onClick={() => {
                  setCgmd(false);
                }}
              >
                Paired
              </button>
            ) : (
              <button
                className="Linksetup"
                onClick={() => {
                  Before("cgmd");
                }}
              >
                Set Up
              </button>
            )}
          </div>
        </div>
        <div className="Linkbottom">
          Caddy is a digital and electronic device to store your pills, send out
          an alarm for remembrance and send a notification to your loved ones!{" "}
        </div>
      </div>
    </div>
  );
};

export default ConnectDevice;
