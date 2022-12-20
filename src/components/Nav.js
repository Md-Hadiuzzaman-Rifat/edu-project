import React from 'react';
import Classes from '../Styles/Nav.module.css'
import Account from "./Account"
import img from "../assets/images/logo-bg.png"
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className={Classes.nav}>
        <ul>
          <li>
            <Link to="/" className={Classes.brand}>
              <img src={img} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </Link>

            {/* <a href="index.html" className={Classes.brand}>
              <img src={img} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a> */}

          </li>
        </ul>
        <Account></Account>
      </nav>
  
    );
};

export default Nav;