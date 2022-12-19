import React from "react";
import classes from '../Styles/TextInput.module.css'

const TextInput = ({children,...rest}) => {
  return (
    <div className={classes.textInput}>
      <input {...rest}/>
      <span className="material-icons-outlined"> {children} </span>
    </div>
  );
};

export default TextInput;
