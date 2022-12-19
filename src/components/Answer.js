import React from "react";
import classes from "../Styles/Answer.module.css"

const Answer = ({children,op,...rest}) => {
  return (
      <label className={classes.answer} for={op}>
        <input {...rest}/>{children}
      </label>
  );
};

export default Answer;
  