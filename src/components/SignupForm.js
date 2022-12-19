import React from 'react';
import classes from "../Styles/Form.module.css"
import TextInput from "../components/TextInput"
import Checkbox from "./Checkbox"
import Button from "./Button"

const SignupForm = () => {
    return (
        <form className={classes.form} style={{height:'500px'}} action="#">

        <TextInput type="text" placeholder="Enter name">person</TextInput>
        <TextInput type="text" placeholder="Enter email">alternate_email</TextInput>
        <TextInput type="text" placeholder="Enter password">lock</TextInput>
        <TextInput type="text" placeholder="Confirm password">lock_clock</TextInput>

        <Checkbox><span> I agree to the Terms & Conditions</span></Checkbox>

        <Button><span>Submit now</span></Button>

        <div className="info">
          Already have an account? <a href="login.html">Login</a> instead.
        </div>
      </form>
    );
};

export default SignupForm;