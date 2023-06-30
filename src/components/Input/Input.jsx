/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./input.css";
import { classNames } from "../../utils/classNames";

export const Input = ({
  disabled,
  endIcon,
  fullWidth = false,
  helperText,
  id = "",
  label,
  onChange,
  placeholder = "",
  required = false,
  size = "",
  startIcon,
  type = "",
  value,
  variant = "standard",
  invalid,
}) => {
  return (
    <div
      className={classNames({
        "input-container": true,
        "input-container-fullWidth": fullWidth,
      })}
    >
      {startIcon && (
        <span className="material-symbols-outlined start-icon">
          {startIcon}
        </span>
      )}
      <input
        onChange={(event) => onChange?.(event.target.value)}
        disabled={disabled}
        type={type}
        value={value}
        required={required}
        id={id}
        placeholder={placeholder}
        className={classNames({
          [`input-size-${size}`]: !!size,
          [`input-${variant}`]: !!variant,
          "input-invalid": invalid,
        })}
        style={{
          paddingLeft: startIcon && "40px",
          paddingRight: endIcon && "30px",
        }}
      />
      {endIcon && (
        <span className="material-symbols-outlined end-icon">{endIcon}</span>
      )}
      <label htmlFor={id} className={`label-${variant}`}>
        {label}
      </label>
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
};
