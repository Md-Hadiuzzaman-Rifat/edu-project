import React from "react";
import Classes from "../Styles/Answers.module.css";
import Answer from "../components/Answer";

const Answers = () => {
  return (
    <div className={Classes.answers}>
      <Answer op="option1" id="option" type="checkbox">
        A New Hope 1
      </Answer>
      <Answer op="option2" id="option" type="checkbox">
        A New Hope 2 
      </Answer>
      <Answer op="option3" id="option" type="checkbox">
        A New Hope 3
      </Answer> 
      <Answer op="option4" id="option" type="checkbox">
        A New Hope 4
      </Answer>
      <Answer op="option5" id="option" type="checkbox">
        A New Hope 5
      </Answer>
      <Answer op="option6" id="option" type="checkbox">
        A New Hope 6
      </Answer>
      <Answer op="option7" id="option" type="checkbox">
        A New Hope 7
      </Answer>
      <Answer op="option8" id="option" type="checkbox">
        A New Hope 8
      </Answer>
      <Answer op="option9" id="option" type="checkbox">
        A New Hope 9
      </Answer>
      <Answer op="option10" id="option" type="checkbox">
        A New Hope 10
      </Answer>
    </div>
  );
};

export default Answers;
