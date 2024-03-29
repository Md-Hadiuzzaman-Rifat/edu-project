import React from 'react';
import classes from "../Styles/Question.module.css"
import Answers from "./Answers"
import Answer from "./Answer"

const Question = () => {
    return (
        <div className={classes.question}>
        <div className={classes.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers></Answers>
      </div>

    );
};

export default Question;