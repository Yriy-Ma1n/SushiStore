import { useState } from "react";
import "./SignInLogIn.css";
import { useForm, type SubmitHandler } from "react-hook-form";


export function LogIn(){
const [range1, setRange1] = useState("checkBoxItemFalse");

//описываем типы
type Inputs = string | undefined;
type UserObj = {
    fullName:Inputs,
    email:Inputs,
    password:Inputs,
    repeatPassword:Inputs
}

const {register, handleSubmit, watch, formState} = useForm<UserObj>({
    mode: "onChange",
});

const password = watch("password");

const fullNameError = formState.errors.fullName?.message;
const emailError = formState.errors.email?.message;
const passwordError = formState.errors.password?.message;
const repeatPasswordError = formState.errors.repeatPassword?.message;

const onSubmit:SubmitHandler<UserObj> = (data) => {
    console.log(data);
}

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

     <form onSubmit={handleSubmit(onSubmit)} >
      <div className="input-group">
        <input id="input1" type="text" placeholder="Full Name" {...register
            ('fullName', {
                required: "This file is required",
                pattern: {
                    value: /^[A-Za-z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]+$/,
                    message: "Invalid full name"
                }
            })} />
            {fullNameError && (<p className="errorMassage">{fullNameError}</p>)}
      </div>

      <div className="input-group">
        <input type="email" placeholder="Email" {...register
            ('email', {
                required: "This file is required",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Invalid email address"
                },
            })} />
            {emailError && (<p className="errorMassage">{emailError}</p>)}
      </div>

      <div className="input-group">
        <input type="password" placeholder="Password" {...register
            ('password', {
                required: "This file is required",
            })} />
            {passwordError && (<p className="errorMassage">{passwordError}</p>)}
      </div>

      <div className="input-group">
        <input type="password" placeholder="Confirm Password" {...register
            ('repeatPassword', {
                required: "This file is required",
                validate: (value) => value === password || "The passwords don't match"
            })}/>
        {repeatPasswordError && (<p className="errorMassage">{repeatPasswordError}</p>)}
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

      <button disabled={range1==="checkBoxItemFalse"?true:false}
      type="submit" className="signin-btn">Log in</button>
    </form>

    <p className="signup-text">
      Already have an account?
      <a href="/SignIn">Sign In</a>
    </p>
  </div>
</div>

    </>)
}