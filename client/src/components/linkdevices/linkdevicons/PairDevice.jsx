import icon1 from "./ion_watch-outline 2.png";
import icon2 from "./ion_watch-outline.png";
import icon3 from "./ion_watch-outline.svg";

export default function PairDevice({ setAfterload, device, pair }) {
  return (
    <>
      <div id="overlay">
        <div className="LinkloadingDiv2 pd">
          <div className="Linkbar2 pdbar">
            <img
              src={
                device === "Caddy"
                  ? icon1
                  : device === "Fit Bit"
                  ? icon3
                  : icon2
              }
              alt="devices"
              className="Linkicn"
            />
          </div>
          <p className="LinknamePD1">Found {device} 1</p>
          <div className="Linktop2">
            <div className="Linkleft2">
              <button
                className="Linkcancel"
                onClick={() => setAfterload(false)}
              >
                Cancel
              </button>{" "}
            </div>
            <div className="Linkright2">
              <button className="Linksearch" onClick={() => pair(device)}>
                Pair
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
