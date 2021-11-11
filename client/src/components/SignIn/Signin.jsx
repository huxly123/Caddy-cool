import SmallLogo from "./SmallLogo"
import axios from "axios"
import {useState} from "react";
import "./signin.css"
export default function Signin(){
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value});
    }

    const [error,setError] = useState([]);
    const [eState,setEstate] = useState(false);


    function submit(){
        try{
          axios.post("http://localhost:3001/login",user)
          .then((res)=>{
              if(res.data.status===400){
                  setError([res.data.message]);
                  setEstate(true);
              }
              if(res.data.status===200){
               setError([res.data.message]);
               setEstate(true);
           }
           if(res.data.status===500){
               setError([res.data.message]);
               setEstate(true);
           }
          })
          .catch((err)=>{
          })
       }catch(err){
       }
          setUser({
           email:"",
           password:""
          })
}
    return(
        <div className="signDiv">
        <div style={{marginTop:"-180px" ,width:"10px"}}>
        <SmallLogo />
        </div>
        <div className="title">
            <p className="titlep1">Welcome!</p>
            <p className="titlep2">To a manageable diabetic life !</p>
        </div>

        <div className="signUpLogin">
        <p className="login">Sign In</p>
        <p className="signUp">Sign Up</p>
        </div>
        <div className="details">
        <label><p style={{color:"lightgrey"}}>Email</p></label>
        <input className="email" type="text" name="email" value={user.email} onChange={handleChange}/>
        <br/>
        <label><p style={{color:"lightgrey"}}>Password</p></label>
        <input className="password" type="password" name="password" value={user.password} onChange={handleChange}/>
        </div>
        <p className="forget">Forgot you password?</p>
        {eState?<div className="errorDiv"><div className="allErr">{error.map((e)=><p key={e}>{e}</p>)}</div> <button onClick={()=>setEstate(false)}>x</button></div>:""}
        <button className="signinbtn" onClick={submit}>Sign In</button>
        <p className="signupreminder">Don't have an account?<a href="www">Sign Up</a></p>
        </div>
        
    )
}