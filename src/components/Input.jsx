import React, { useState } from "react";
import "./input.css";

export const Input = ({ variant = "standard", helperText, disabled, value = "Placeholder", startIcon, endIcon, title, size="", fullWidth =""}) => {

  

  return (
    <div className="cont">
        <h2>{title}</h2>
        <div className={`input-container input-container-${fullWidth}`}>
      {startIcon && <span className="material-symbols-outlined start-icon">{startIcon}</span>}
      <input
        disabled={disabled}
        type="text"
        id="input"
        placeholder={value}
        className={`input-${variant} input-size-${size}`}
        style={{paddingLeft: startIcon && "40px", paddingRight: endIcon && "30px"}}
       
      />
      {endIcon && <span className="material-symbols-outlined end-icon">{endIcon}</span>}
      <label htmlFor="input" className={`label-${variant}`}>
        Label
      </label>
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
    </div>
    
  );
};
