import React from "react";

const Checkbox = ({ children }) => {
  return (
    <label>
      <input type="checkbox" />
      {children}
    </label>
  );
};

export default Checkbox;
