import axios from "axios";
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/validate";

import './styles.css'
import { Input, Label } from "../../Components/Input";
import Card from "../../Components/Card";

const Signup = () => {
  const { handleChange, handleSubmit, errors } = useForm(submit, validate);
  const [signedUp, setSignedUp] = useState({ valid: false, invalid: false });

  function submit(data) {
    console.log("signup form submitted");
    axios
      .get(`http://localhost:3000/users/?email=${data.email}`)
      .then((response) => {
        if (response.data.length) {
          setSignedUp({ invalid: true });
          console.log("user already exists");
          return;
        } else {
          axios.post("http://localhost:3000/users", data).then((res) => {
            setSignedUp({ valid: true });
            console.log(res.data);
          });
          console.log("user created");
          return;
        }
      })
      .catch(err => {
        console.log("error message", err);
      });
  }

  return signedUp.valid ? (
    <Redirect to="/login" />
  ) : (
    <Card
      header={"User Signup"}
      footer={
        <span>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </span>
      }
      body={
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <Label htmlFor="firstname" content="Fullname" />
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Lastname Firstname Othernames"
              ariaLabel="Fullname"
              onChange={handleChange}
              className={`${errors.fullname ? "inputError" : null} form-control`}
            />
            {errors.fullname ? (
              <p className="error">{errors.fullname}</p>
            ) : (
              <small id="passwordHelpBlock" className="form-text text-muted">
                First and Lastnames are required.
              </small>
            )}
          </div>
          <div className="form-group">
            <Label htmlFor="email" content="Email Adress" />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              ariaLabel="Email Adress"
              onChange={handleChange}
              className={`${errors.email || signedUp.invalid ? "inputError" : null} form-control`}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <Label htmlFor="phone" content="Phone" />
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="11 digits number"
              ariaLabel="Phone"
              onChange={handleChange}
              className={`${errors.phone ? "inputError" : null} form-control`}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <Label htmlFor="password" content="Password" />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              ariaLabel="Password"
              onChange={handleChange}
              className={`${errors.password ? "inputError" : null} form-control`}
            />
            {errors.password ? <p className="error">{errors.password}</p> :
            <small id="passwordHelpBlock" className="form-text text-muted">
              Password should be a minimun of 4 characters and must contain a number.
            </small>}
          </div>
          <div className="form-group">
            <Label htmlFor="passwordRepeat" content="Confirm Password" />
            <Input
              htmlFor="password2"
              label="Confirm Password"
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              onChange={handleChange}
              className={`${errors.passwordRepeat ? "inputError" : null} form-control`}
            />
            {errors.passwordRepeat && <p className="error">{errors.passwordRepeat}</p>}
          </div>
          <br />
          {errors.inputRequired && <p className="error borderRed">{errors.inputRequired} </p>}
          {signedUp.invalid && <p className="error">Email already exists, Please provide a unique email address</p>}
          <div>
            <Input type="submit" id="submit" value="Submit" className="btn-primary" />
          </div>
        </form>
      }
    />
  );
};

export default Signup;
