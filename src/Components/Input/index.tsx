import React from "react";
import "./styles.css";

export default function Input({ htmlFor, label, type, id, name, value, placeholder, ariaLabel, onChange, className, icon }: any) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <div className="input-group flex-nowrap">
        <div className="input-group-prepend">
          {icon && (
            <span className="input-group-text" id="addon-wrapping">
              {icon}
            </span>
          )}
        </div>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          aria-label={ariaLabel}
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
}