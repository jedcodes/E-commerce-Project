import React, { useState } from "react";
import "./signUp.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      // Clearing Input form
      setConfirmPassword("");
      setEmail("");
      setPassword("");
      setDisplayName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={displayName}
          handleChange={(e) => setDisplayName(e.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
