
const BeforeSearching = ({setBeforeLoad,openLoad}) => {
    return (
        <>
        <div id="overlay"> 
        <div className="loadingDiv2">
        <div className="bottom2">
        <p>
        Before Searching:
        </p> 
        <ul>
            <li>Enable the Bluetooth</li>
            <li>Connect your phone to internet</li>
            <li>Enable the Bluetooth</li>
            <li>Caddy is charged</li>
            <li>Caddy is not paired to other devices</li>
        </ul>
       
        </div> 
        <div className="top2">
        <div className="left2"><button className="cancel" onClick={()=>setBeforeLoad(false)}>Cancel</button> </div>
        <div className="right2"><button className="search" onClick={openLoad}>Search</button> </div>
        </div>
          
        </div>
        </div>
        </>
    )
}

export default BeforeSearching
