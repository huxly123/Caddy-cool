import { useState } from "react";

import "./loading.css";

import ConnectDevice from "./ConnectDevice";
import Searching from "./Searching";
import BeforeSeacrhing from "./BeforeSearching";
import PairDevice from "./linkdevicons/PairDevice";

const LinkDevice = () => {
  const [loading, setloading] = useState(false);
  const [beforeLoad, setBeforeLoad] = useState(false);
  const [afterLoad, setAfterload] = useState(false);

  const [caddy, setCaddy] = useState(false);
  const [cgmd, setCgmd] = useState(false);
  const [fitbit, setFitbit] = useState(false);

  const [device, setDevice] = useState("");

  const Before = (device) => {
    setBeforeLoad(true);

    if (device === "caddy") {
      setDevice("Caddy");
    }
    if (device === "cgmd") {
      setDevice("CGMD");
    }
    if (device === "fitbit") {
      setDevice("Fit Bit");
    }
  };

  const openLoad = () => {
    setBeforeLoad(false);

    setloading(true);

    setTimeout(() => {
      setloading(false);

      setAfterload(true);
    }, 4000);
  };

  const pair = (dev) => {
    setAfterload(false);

    if (device === "Caddy") {
      setCaddy(true);
    }
    if (device === "CGMD") {
      setCgmd(true);
    }
    if (device === "Fit Bit") {
      setFitbit(true);
    }
  };

  return (
    <div className="LinkLinkDevice">
      <div className="Linktop1">
        <div className="Linkleft1">
          <div>Link Devices</div>
        </div>
        <div className="Linkright1">My Devices </div>
      </div>

      <ConnectDevice
        Before={Before}
        caddy={caddy}
        setCaddy={setCaddy}
        cgmd={cgmd}
        setCgmd={setCgmd}
        fitbit={fitbit}
        setFitbit={setFitbit}
      />

      {beforeLoad && (
        <BeforeSeacrhing setBeforeLoad={setBeforeLoad} openLoad={openLoad} />
      )}

      {loading && <Searching />}

      {afterLoad && (
        <PairDevice setAfterload={setAfterload} device={device} pair={pair} />
      )}
    </div>
  );
};

export default LinkDevice;
