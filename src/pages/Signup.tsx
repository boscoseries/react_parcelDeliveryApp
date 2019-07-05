import React from "react";
import { NavLink } from "react-router-dom";
import  useForm from '../hooks/useForm'

import axios from "axios";

const Signup = () => {
  const { handleChange, handleSubmit } = useForm(submit);

  function submit(e: any) {
    console.log("submitted");
      const user = [...e.target].map((input: any) => input.name);
    const data = [...e.target]
      .filter((input: any): any => input.type !== "submit")
      .map((input: any) => input.value)
      .reduce((initial: any, next: any, index: number) => {
        const key = user[index];
        initial[key] = next;
        return initial;
      }, {});
    axios
      .post("http://localhost:3000/users", data)
      .then((res: any) => {
        console.log(res);
      })
      .catch(err => {
        console.log("error message", err);
      });
  }




  return (
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
            />
          </div>
          <div>
            <label htmlFor="email">Email Adress:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="11 digits number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              onChange={handleChange}
            />
          </div>
          <br />
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
}


export default Signup;