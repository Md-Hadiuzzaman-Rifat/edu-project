import React from "react";
import Illustration from "../Illustration";
import Layout from "../Layout";
import SignupForm from "../SignupForm";
import image from "../../assets/images/signup.svg"

const Signup = () => {
  return (
    <div>
      <Layout>
        <h1>Create an account</h1>
        <div className="column">
          <Illustration src={image} alt="Sign Up"></Illustration>
          <SignupForm></SignupForm>
        </div>
      </Layout>
    </div>
  );
};

export default Signup;
