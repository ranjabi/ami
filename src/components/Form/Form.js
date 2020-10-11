import React from "react";
import "./form.scss";

const InputField = (props) => (
  <div className="inputField">
    {props.hasLabel && <label>{props.label}</label>}
    <input
      type={props.inputType}
      name={props.name}
      onChange={(e) => props.handleChange(e.target.value)}
      value={props.value}
    ></input>
    {props.error && <p className="error">{props.error}</p>}
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
    {props.error && <p className="error">{props.error}</p>}
  </div>
);

const Button = (props) => (
  <button
    className="button"
    onClick={
      props.doNothing ? () => {} : () => props.onClick(props.onClickParams)
    }
  >
    {props.text}
  </button>
);

const Dropdown = (props) => (
  <div className="inputField">
    {props.hasLabel && <label>{props.label}</label>}
    <select
      name={props.name}
      onChange={(e) => e.target.value && props.handleChange(e.target.value)}
      value={props.value}
    >
      <option disabled />
      {props.options.map((row) => (
        <option key={row}>{row}</option>
      ))}
    </select>
  </div>
);

export { InputField, Button, TextArea, Dropdown };
