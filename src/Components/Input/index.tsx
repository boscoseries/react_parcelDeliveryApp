import React from "react";
import "./styles.css";

export function Input({ type, id, name, value, placeholder, ariaLabel, onChange, className, icon }: any) {
  return (
    <>
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

export function Label({ htmlFor, id, content, className }: any) {
  return (
    <label htmlFor={htmlFor} className={className} id={id}>
      {content}
    </label>
  );
}

export function InputRadio({ id, name, value, type, onChange, className, checked }: any) {
  return (
    <>
      <input type={type} id={id} name={name} value={value} className={className} onChange={onChange} checked={checked} />
    </>
  );
}
