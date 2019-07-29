import axios from "axios";
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/validate";

import Input from "../../Components/Input";
import Card from "../../Components/Card";

const Signup = () => {
  const { handleChange, handleSubmit, errors } = useForm(submit, validate);
  const [signedUp, setSignedUp] = useState<any>({ valid: false, invalid: false });

  function submit(data: any) {
    console.log("signup form submitted");
    axios
      .get(`http://localhost:3000/users/?email=${data.email}`)
      .then((response: any) => {
        if (response.data.length) {
          setSignedUp({ invalid: true });
          console.log("user already exists");
          return;
        } else {
          axios.post("http://localhost:3000/users", data).then((res: any) => {
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
        header={"User signup"}
        footer={
          <span>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </span>
        }
        body={
          <form className="form" noValidate onSubmit={handleSubmit}>
            <div>
              <Input
                htmlFor="firstname"
                label="Fullname"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Lastname Firstname Othernames"
                ariaLabel="Fullname"
                onChange={handleChange}
                className={`${errors.fullname ? "inputError" : null} form-control`}
              />
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            <div>
              <Input
                htmlFor="email"
                label="Email Adress"
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
            <div>
              <Input
                htmlFor="phone"
                label="Phone"
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
            <div>
              <Input
                htmlFor="password"
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                ariaLabel="Password"
                onChange={handleChange}
                className={`${errors.password ? "inputError" : null} form-control`}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
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
