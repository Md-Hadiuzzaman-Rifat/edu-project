import React from 'react';
import Classes from "../Styles/Illustration.module.css"
import img from "../assets/images/signup.svg"

const Illustration = ({src,alt}) => {
    return (
        <div className={Classes.illustration}>
        <img src={src} alt={alt}/>
      </div>
    );
};

export default Illustration;