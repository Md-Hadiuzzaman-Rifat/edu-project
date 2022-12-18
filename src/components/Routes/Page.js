import React from 'react';
import page1 from "./Page1"
import Page2 from "./Page2"

import { NavLink , Outlet } from "react-router-dom"

const Page = () => {
    return (
        <div>
            <h2>This is Main Page.</h2>
            <NavLink to="/page/page1" className={(navInfo)=>{console.log(navInfo)
            }}>Page1</NavLink>
            <Outlet></Outlet>
        </div>
    );
};

export default Page;