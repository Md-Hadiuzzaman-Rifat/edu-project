import React from 'react';
import Classes from "../Styles/Button.module.css"

const Button = ({children,className}) => {
    return (
        <button className={`${Classes.button} ${className}`}>
            {children}
        </button>
    );
};

export default Button;