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
      placeholder={props.placeholder}
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
  <div className={"inputField " + (props.className !== undefined ? props.className : "")}>
    {props.hasLabel && <label>{props.label}</label>}
    <select
      name={props.name}
      onChange={(e) => e.target.value && props.handleChange(e.target.value)}
      value={props.value}
    >
      {props.hideTooltip ? "":
      <option value="" disabled>
        Pilih 1
      </option>
      }
      {props.options.map((row, idx) => (
        <option value={props.useKey ? idx:row} key={props.useKey ? idx:row}>{row}</option>
      ))}
    </select>
  </div>
);

export { InputField, Button, TextArea, Dropdown };
