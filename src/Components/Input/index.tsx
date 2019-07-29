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

// export default function Input({ htmlFor, label, type, id, name, value, autoComplete, placeholder, ariaLabel, onChange, className }: any) {
//   return (
//     <>
//       <label htmlFor={htmlFor}>{label}</label>
//       <div className="input-group mb-3">
//         <div className="input-group-prepend">
//           <span className="input-group-text" id="basic-addon1">
//             @
//           </span>
//         </div>
//         <input
//           type={type}
//           id={id}
//           value={value}
//           className={className}
//           placeholder={placeholder}
//           aria-label={ariaLabel}
//           aria-describedby="basic-addon1"
//         />
//       </div>
//     </>
//   );
// }

// <div>
//   <label htmlFor={htmlFor}>{label}</label>
//   <input
//     type={type}
//     id={id}
//     name={name}
//     value={value}
//     placeholder={placeholder}
//     className="form-control"
//
//     onChange={onChange}
//     autoComplete={autoComplete}
//     className={className}
//   // style={{ borderColor: "red" }}
//   />
// </div>
