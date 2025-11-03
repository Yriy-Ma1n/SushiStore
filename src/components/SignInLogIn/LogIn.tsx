import { useState } from "react";
import "./SignInLogIn.css";


export function LogIn(){
const [range1, setRange1] = useState("checkBoxItemFalse");

    return(<>
        <div className="container">
  <div className="login-box">
    <h1>Log In</h1>
    <p className="subtitle">Create an account to get started!</p>

    <div className="buttons">
      <button className="social-btn">Sign up with Google</button>
      <button className="social-btn">Sign up with Apple</button>
    </div>

    <div className="divider">OR</div>

    <form>
      <div className="input-group">
        <input type="text" placeholder="Full Name" required />
      </div>

      <div className="input-group">
        <input type="email" placeholder="Email" required />
      </div>

      <div className="input-group">
        <input type="password" placeholder="Password" required />
      </div>

      <div className="input-group">
        <input type="password" placeholder="Confirm Password" required />
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
          <span>I agree to the <a href="#">Terms & Conditions</a></span>
        </label>
      </div>

      <button type="submit" className="signin-btn">Sign Up</button>
    </form>

    <p className="signup-text">
      Already have an account?
      <a href="/SignIn">Sign In</a>
    </p>
  </div>
</div>

    </>)
}