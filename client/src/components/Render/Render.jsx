import React, { useEffect, useState } from 'react'
import Logo from '../Home/logo';
import Signup from "../SignUp/Signup"

function Render() {

    const [change,SetChange]=useState(false);

    useEffect(()=>{
setTimeout(()=>{
SetChange(true)
},4000)
    },[])

    return (change)?(
        <Signup/>
    ): <Logo/>
}

export default Render
