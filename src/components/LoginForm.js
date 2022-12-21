import React from "react";
import classes from "../Styles/Form.module.css";
import TextInput from "./TextInput";
import Button from "./Button";
import { Link,useNavigate } from "react-router-dom"
import {useState} from "react"
import {useAuth} from "../context/AuthContext"

const LoginForm = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')

  const [error,setError]=useState()
  const [loading,setLoading]=useState()

  const {login}=useAuth()
  const navigate=useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    try{
      setError("")
      setLoading(true)
      await login(email,password)
      navigate('/',{
        replace:true
      })
    }catch(err){
      console.log(err)
      setError("Failed To Login")
      setLoading(false)
    }
  }

  return (
    <form className={classes.form} style={{ height: "330px" }} action="#" onSubmit={handleSubmit}>

      <TextInput type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email">
        person{" "}
      </TextInput>

      <TextInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password">
        lock{" "}
      </TextInput>

      <Button className="button" type="submit">
        <span>Submit now</span>
      </Button> 

      {error && <p className="error">{error}</p> }

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
