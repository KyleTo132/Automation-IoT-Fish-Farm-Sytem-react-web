import React from "react";
import "./Switch2.css";

const Switch2 = ({ is2On, handle2Toggle, on2Color }) => {
  return (
    <>
      <input
        checked={is2On}
        onChange={handle2Toggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: is2On && on2Color }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};
export default Switch2;
