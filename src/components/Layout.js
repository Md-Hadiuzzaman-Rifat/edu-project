import React from 'react';
import Classes from "../Styles/Layout.module.css"
import Nav from "./Nav"

const Layout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            <div className={Classes.main}>
                <div className={Classes.container}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;