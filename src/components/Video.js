import React from "react";
import img from "../assets/images/3.jpg";
import Classes from "../Styles/Video.module.css"
const Video = () => {
  return (
        <div className={Classes.video}>
          <img src={img} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={Classes.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
  );
};

export default Video;
 