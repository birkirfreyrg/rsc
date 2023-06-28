import React from "react";
import "../styles/Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      {text}
    </button>
  );
};

export default Button;
