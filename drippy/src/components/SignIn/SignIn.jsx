import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./signIn.scss";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
