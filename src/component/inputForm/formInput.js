import React from "react";
import "./formInput.css";

function FormInput(props) {
  const { label, id, errorMessege, onChange, ...others } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <br />

      <input {...others} onChange={onChange} /> 
      <span>{errorMessege}</span>
      <br />
    </div>
  );
}

export default FormInput;
