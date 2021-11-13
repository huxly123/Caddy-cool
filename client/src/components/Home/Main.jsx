import "./main.css"
import Logo from "./logo"

// import homeIconActive from "./Footer/homeimgactive.svg";
// import groupIconInactive from "./Footer/groupimginactive.svg";
// import caddyIconInactive from "./Footer/Vector.svg";

// export default function App ()
function Main ()
{
    // document.getElementById("homeicon").src = `${ homeIconActive }`;
    // document.getElementById("communityicon").src = `${ groupIconInactive }`;
    // document.getElementById("caddyicon").src = `${ caddyIconInactive }`;

    return (
        <div className="main">
            <Logo />
        </div>
    )
};

export { Main }