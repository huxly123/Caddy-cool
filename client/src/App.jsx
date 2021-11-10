import Pills_front from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import Footerr from "./components/Footer/Footerr";
import Headerr from "./components/Header/Headerr";
import Caddy from "./components/Caddy_Log/Caddy/Caddy";
import PeopleConnect from "./components/Community/PeopleConnect";


function App ()
{
  return (
    <>
      <Headerr />
      {/* <Pills_front/> */}
      <Device />
      <Footerr />
      {/* <Caddy/> */}

      {/* <PeopleConnect /> */}
    </>
  );
}

export default App;
