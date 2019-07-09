import axios from "axios";
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "../hooks/useForm";
import validate from "../hooks/validate";

const Signup = () => {
  const { handleChange, handleSubmit, errors } = useForm(submit, validate);
  const [signedUp, setSignedUp] = useState<any>({ valid: false, invalid: false })


  function submit(data: any) {
    console.log("signup form submitted");
    axios
      .get(`http://localhost:3000/users/?email=${data.email}`)
        .then((response: any) => {
          if (response.data.length) {
            setSignedUp({ invalid: true })
            console.log('user already exists')
            return;
          } else {
            axios.post("http://localhost:3000/users", data)
              .then((res: any) => {
                setSignedUp({ valid: true })
                console.log(res.data);
              });
            console.log('user created')
            return
          }
      })
      .catch(err => {
        console.log("error message", err);
      });
  }

  return signedUp.valid ? (
    <Redirect to="/login" />
  ) : (
    <div className="top-margin">
      <div className="form-wrapper" style={{ width: "30%", padding: "50px" }}>
        <h4 style={{ textAlign: "center", color: "black", padding: 0, margin: 0 }}>User signup</h4>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname"> Fullname:</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Lastname Firstname Othernames"
              onChange={handleChange}
              className={`${errors.fullname ? "inputError" : "inputValid"}`}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div>
            <label htmlFor="email">Email Adress:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              onChange={handleChange}
              className={`${errors.email || signedUp.invalid ? "inputError" : "inputValid"}`}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="11 digits number"
              onChange={handleChange}
              className={`${errors.phone ? "inputError" : "inputValid"}`}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className={`${errors.password ? "inputError" : "inputValid"}`}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              onChange={handleChange}
              className={`${errors.passwordRepeat ? "inputError" : "inputValid"}`}
            />
            {errors.passwordRepeat && <p className="error">{errors.passwordRepeat}</p>}
          </div>
          <br />
          {errors.inputRequired && <p className="error">{errors.inputRequired}</p>}
          {signedUp.invalid && <p className="error">Email already exists, Please provide a unique email address</p>}
          <div>
            <input type="submit" id="submit" value="Submit" />
          </div>
          <div className="login-link">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
