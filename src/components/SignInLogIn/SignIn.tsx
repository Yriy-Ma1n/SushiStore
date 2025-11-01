import { useState } from "react";
import "./SignInLogIn.css";

export function SignIn(){
    const [range1, setRange1] = useState("checkBoxItemFalse");

    return(<>
  <div className="container">
    <div className="login-box">
      <h1>Sign In</h1>
      <p className="subtitle">Welcome back, you’ve been missed!</p>

      <div className="buttons">
        <button className="social-btn google">Log in with Google</button>
        <button className="social-btn apple">Log in with Apple</button>
      </div>

      <div className="divider">
        <span>OR</span>
      </div>

      <form>
        <div className="input-group">
          <input type="email" placeholder="Email" required/>
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" required/>
        </div>

        <div className="options">
          <label onClick={() => {
            if(range1 === "checkBoxItemTrue"){
                setRange1("checkBoxItemFalse");
            }else{
                setRange1("checkBoxItemTrue");
            }
            }}>
            <div className={range1}><span className="material-symbols-outlined">check</span></div> 
            Remember me
            </label>
          <a href="#" className="forgot">Forgot Password?</a>
        </div>

        <button className="signin-btn" type="submit">Sign In</button>
      </form>

      <p className="signup-text">
        You haven’t any account? <a href="#">Log In</a>
      </p>
    </div>
  </div>
    </>)
}