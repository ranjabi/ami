import React from "react";
import "../styles/form.scss";

const InputField = (props) => (
  <div className="inputField">
    {props.hasLabel && <label>{props.label}</label>}
    <input
      type={props.inputType}
      name={props.name}
      onChange={(e) => props.handleChange(e.target.value)}
      value={props.value}
    ></input>
  </div>
);

const TextArea = (props) => (
  <div className="inputField">
    {props.hasLabel && <label>{props.label}</label>}
    <textarea
      name={props.name}
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
      rows={4}
    />
  </div>
);

const Button = (props) => (
  <button className="button" onClick={() => props.onClick(props.onClickParams)}>
    {props.text}
  </button>
);

export { InputField, Button, TextArea };
