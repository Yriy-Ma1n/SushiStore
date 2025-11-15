import { useState } from "react";
import "./SignInLogIn.css";
import { useForm, type SubmitHandler } from "react-hook-form";

export function SignIn() {
  const [range1, setRange1] = useState("checkBoxItemFalse");

type Inputs = string | undefined;
type UserObj = {
    fullName:Inputs,
    email:Inputs,
    password:Inputs,
    repeatPassword:Inputs
}

  const {register, handleSubmit, formState, reset} = useForm<UserObj>({
      mode: "onChange",
  });

const emailError = formState.errors.email?.message;
const passwordError = formState.errors.password?.message;

const onSubmit:SubmitHandler<UserObj> = (data) => {
  console.log(data);
  reset();
}

  return (
    <>
      <div className="container">
        <div className="login-box">
          <h1>Sign In</h1>
          <p className="subtitle">Welcome back, you’ve been missed!</p>

          <div className="buttons">
            <button className="social-btn google">Sign in with Google</button>
            <button className="social-btn apple">Sign in with Apple</button>
          </div>

          <div className="divider">
            <span>OR</span>
          </div>

          <form onSubmit={() => handleSubmit(onSubmit)}>
            <div className="input-group">
              <input type="email" placeholder="Email" required {...register
                ('email', {
                  required: "This file is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Invalid email address"
                },
                })
              } />
              {emailError && (<p className="errorMassage">{emailError}</p>)}
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password" required {...register
            ('password', {
                required: "This file is required",
                pattern: {
                    value: /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]+$/,
                    message:"Invalid Password"
                }
            })}/>
            {passwordError && (<p className="errorMassage">{passwordError}</p>)}
            </div>

            <div className="options">
              <label
                onClick={() => {
                  if (range1 === "checkBoxItemTrue") {
                    setRange1("checkBoxItemFalse");
                  } else {
                    setRange1("checkBoxItemTrue");
                  }
                }}>
                <div className={range1}>
                  <span className="material-symbols-outlined">check</span>
                </div>
                Remember me
              </label>
              <a href="#" className="forgot">
                Forgot Password?
              </a>
            </div>

            <button className="signin-btn" type="submit">
              Sign In
            </button>
          </form>

          <p className="signup-text">
            You haven’t any account? <a href="/LogIn">Log In</a>
          </p>
        </div>
      </div>
    </>
  );
}
