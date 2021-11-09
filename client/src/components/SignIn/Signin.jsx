import SmallLogo from "./SmallLogo"
import "./signin.css"
export default function Signin(){
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
        <input className="email" type="text" name="email"/>
        <br/>
        <label><p style={{color:"lightgrey"}}>Password</p></label>
        <input className="password" type="text" name="email"/>
        </div>
        <p className="forget">Forgot you password?</p>
        <button className="signinbtn">Sign In</button>
        <p className="signupreminder">Don't have an account?<a href="www">Sign Up</a></p>
        </div>
        
    )
}