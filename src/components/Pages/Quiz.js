import React from "react";
import Layout from "../Layout";
import Answers from "../Answers";
import Progressbar from "../Progressbar"

const Quiz = () => {
  return (
    <div>
      <Layout>
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answers></Answers>
        <Progressbar></Progressbar>
      </Layout>
    </div>
  );
};

export default Quiz;
