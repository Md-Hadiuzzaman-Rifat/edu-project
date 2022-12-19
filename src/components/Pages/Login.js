import React from "react";
import Layout from "./../Layout";
import Illustration from "../Illustration"
import image from "../../assets/images/login.svg"
import LoginForm from "../LoginForm"
const Login = () => {
  return (
    <div>
      <Layout>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration src={image} alt="login"/>
            <LoginForm></LoginForm>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
