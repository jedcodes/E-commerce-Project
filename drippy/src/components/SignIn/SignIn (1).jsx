import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./signIn.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>i Already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
          label="Email"
        />
        <FormInput
          type="password"
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          label="Password"
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign In with google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
