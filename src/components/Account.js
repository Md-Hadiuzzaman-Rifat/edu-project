import React from 'react';
import Classes from '../Styles/Account.module.css'

const Account = () => {
    return (
        <div className={Classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        <span className="material-icons-outlined" title="Logout"> logout </span> 
      </div>
    );
};

export default Account;