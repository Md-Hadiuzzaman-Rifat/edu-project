import React from "react";
import Classes from "../Styles/Account.module.css";
import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom"

const Account = () => {
  const { currentUser } = useAuth();
  return (
    <div className={Classes.account}>
      {currentUser ? (
        <>
          
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout">
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
