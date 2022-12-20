import React, { useState } from "react";
import classes from "../Styles/Form.module.css";
import TextInput from "../components/TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from './../context/AuthContext'

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const {signup}=useAuth()

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password dont match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/", {
        replace: true,
      });
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError("Failed to create account!")
    }
  }

  return (
    <form
      className={classes.form}
      style={{ height: "500px" }}
      onSubmit={handleSubmit}
      action="#"
    >
      <TextInput
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter name"
      >
        person
      </TextInput>
      <TextInput
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      >
        alternate_email
      </TextInput>
      <TextInput
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      >
        lock
      </TextInput>
      <TextInput
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
      >
        lock_clock
      </TextInput>

      <Checkbox required value={agree} onChange={(e) => setAgree(e.target.value)}>
        <span> I agree to the Terms & Conditions</span>
      </Checkbox>

      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p> }

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default SignupForm;
