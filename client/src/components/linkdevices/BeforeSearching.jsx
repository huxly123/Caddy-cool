const BeforeSearching = ({ setBeforeLoad, openLoad }) => {
  return (
    <>
      <div id="overlay">
        <div className="LinkloadingDiv2">
          <div className="Linkbottom2">
            <p>Before Searching:</p>
            <ul>
              <li>Enable the Bluetooth</li>
              <li>Connect your phone to internet</li>
              <li>Enable the Bluetooth</li>
              <li>Caddy is charged</li>
              <li>Caddy is not paired to other devices</li>
            </ul>
          </div>
          <div className="Linktop2">
            <div className="Linkleft2">
              <button
                className="Linkcancel"
                onClick={() => setBeforeLoad(false)}
              >
                Cancel
              </button>{" "}
            </div>
            <div className="Linkright2">
              <button className="Linksearch" onClick={openLoad}>
                Search
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeSearching;
