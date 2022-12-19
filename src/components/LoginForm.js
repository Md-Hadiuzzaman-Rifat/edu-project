import React from "react";
import classes from "../Styles/Form.module.css";
import TextInput from "./TextInput";
import Button from "./Button";
import Checkbox from "./Checkbox"

const LoginForm = () => {
  return (
    <form className={classes.form} style={{ height: "330px" }} action="#">
      <TextInput type="text" placeholder="Enter email">
        person{" "}
      </TextInput>

      <TextInput type="password" placeholder="Enter password">
        lock{" "}
      </TextInput>

      <Button className="button">
        <span>Submit now</span>
      </Button> 

      <div className="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </form>
  );
};

export default LoginForm;
