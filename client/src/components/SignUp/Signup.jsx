import SmallLogo from "./SmallLogo"
import { useState } from "react"
import axios from "axios";
import "./signup.css"
export default function SignUp(){
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value});
    }

     function submit(){
         try{
           axios.post("http://localhost:3001/user",user)
           .then((res)=>{
               if(res.data.status===400){
               }
           })
           .catch((err)=>{
               console.log(err)
           })
        }catch(err){
            console.log(err);
        }
           setUser({
            name:"",
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
        <label><p style={{color:"lightgrey"}}>Name</p></label>
        <input className="email" value={user.name} type="text" name="name" onChange={handleChange}/>
        <br/>
        <label><p style={{color:"lightgrey"}}>Email</p></label>
        <input className="email" value={user.email} type="text" name="email" onChange={handleChange}/>
        <br/>
        <label><p style={{color:"lightgrey"}}>Password</p></label>
        <input className="password"  value={user.password} type="text" name="password" onChange={handleChange}/>
        </div>
        <button className="signinbtn" onClick={submit}>Sign Up</button>
        </div>
        
    )
}