import React from "react";

const Button = ({label, cb}) => {
  return (
    <div className="btn" onClick={cb}>
      <label>{label}</label>
    </div>
  )
}

export default Button;