import React from "react";

export default function Signup() {
  return (
    <React.Fragment>
    <h4>User signup</h4>
    <div className="form-wrapper">
      <form className="form">
        <div>
          <label for="firstname"> Firstname:</label>
          <input type="text" name="firstname" />
          </div>
          <div>
          <label for="lastname"> Lastname:</label>
          <input type="text" name="lastname" />
        </div>
        <div>
          <label for="email">Emiail Adress:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label for="phone1">Phone (mobile):</label>
          <input type="number" name="phone1" />
          <label for="phone2">Phone (work):</label>
          <input type="number" name="phone2" />
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" name="address" />
        </div>
          <label for="state">Choose a State:</label>
          <select id="state">
            <option value="">--Please choose an option--</option>
            <option value="lagos">Lagos</option>
          </select>
          <label for="country">Country:</label>
          <select id="country">
            <option value="">--Please choose an option--</option>
            <option value="country">Nigeria</option>
          </select>
        <input type="submit" value="Submit" />
        <div>Already have an account? Login</div>
      </form>
      </div>
    </React.Fragment>
  );
}
