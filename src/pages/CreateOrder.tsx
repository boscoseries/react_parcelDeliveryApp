import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, InputRadio, Label } from "../Components/Input";

import "../styles/orderStyles.css";

export default function CreateOrder() {
  const [radioState, setRadioState] = useState(false);
  const [value, setValue] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRadioState(true);
    console.log(radioState);
  };

  return (
    <div className="form-wrapper top-margin" style={{ width: "100%" }}>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="d-block">
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted d-block">Pickup details</small>
                  <small className="text-muted d-block">Recipient details</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <button className="btn btn-secondary btn-block" type="submit">
              Checkout
            </button>
          </div>

          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Pickup Information</h4>

            <form className="needs-validation">
              <p>Select a pickup location:</p>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <InputRadio
                    id="sameAddress"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    onchange={handleChange}
                    checked={true}
                  />
                  <Label className="custom-control-label" htmlFor="sameAddress" content="My Address" />
                </div>
                <div className="custom-control custom-radio">
                  <InputRadio id="different" name="paymentMethod" type="radio" className="custom-control-input" onchange={handleChange} />
                  <Label className="custom-control-label" htmlFor="different" content="Different Address" />
                </div>
              </div>
              {radioState && (
                <>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="address">Address</label>
                      <Input type="text" className="form-control" id="address" placeholder="Pickup address" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="milestone">Milestone</label>
                      <Input type="text" className="form-control" id="milestone" placeholder="Enter a milestone" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city">City</label>
                      <Input type="text" className="form-control" id="city" placeholder="Enter city" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="state">State</label>
                      <Input type="text" className="form-control" id="state" placeholder="Enter state" />
                    </div>
                  </div>
                </>
              )}
              <hr className="mb-4" />
              <h4>Parcel Information</h4>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="typeOfParcel">Type of Parcel</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="typeOfParcel"
                    placeholder="E.g. Letter, 3 sets of folders, A briefcase of documents"
                  />
                  <div className="invalid-feedback">Valid first name is required.</div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Weight</label>
                  <div className="input-group">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">0 - 5kg</option>
                      <option value="2">5 - 10kg</option>
                      <option value="3">10 - 15kg</option>
                    </select>
                    <div className="input-group-prepend">
                      <span className="input-group-text">N</span>
                      {value === 1 && <span className="input-group-text">700.00</span>}
                      {value === 2 && <span className="input-group-text">1500.00</span>}
                      {value === 3 && <span className="input-group-text">2000.00</span>}
                    </div>
                    <small id="passwordHelpBlock" className="form-text text-muted">
                      Selected value is subject to verification upon pickup. Please provide an acurate weight range.
                    </small>
                  </div>
                  <div className="invalid-feedback">Field is required.</div>
                </div>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Recipient's Details</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="fullname">
                    Fullnames <small className="text-muted">(Required)</small>
                  </label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="fullname" placeholder="Firstname  Lastname  Othernames" />
                    <div className="invalid-feedback" style={{ width: "100%" }}>
                      First and Lastnames are required.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="address">
                    Address <small className="text-muted">(Required)</small>
                  </label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                  <div className="invalid-feedback">Please enter your shipping address.</div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="address2">Address 2</label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="address">
                    Mobile <small className="text-muted">(Required)</small>
                  </label>
                  <input type="number" className="form-control" id="address" placeholder="11 digits primary contact" />
                  <div className="invalid-feedback">Please enter recipient's contact number.</div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="address2">Phone</label>
                  <input type="text" className="form-control" id="address2" placeholder="11 digits secondary contact" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 mb-3">
                  <label htmlFor="country">
                    Country <small className="text-muted">(Required)</small>
                  </label>
                  <select className="custom-select d-block w-100" id="country">
                    <option value="">Choose...</option>
                    <option>Nigeria</option>
                  </select>
                  <div className="invalid-feedback">Please select a country.</div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="state">
                    State<small className="text-muted">(Required)</small>
                  </label>
                  <select className="custom-select d-block w-100" id="state">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">Please select state.</div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="state">
                    LGA<small className="text-muted">(Required)</small>
                  </label>
                  <select className="custom-select d-block w-100" id="state">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">Please select Local Govt. Area.</div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <button className="btn btn-secondary btn-block" type="submit">
                Continue to Cart
              </button>
              <hr className="mb-4 mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



// <h4 className="mb-3">Payment</h4>
//   <div className="d-block my-3">
//     <div className="custom-control custom-radio">
//       <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" value="true" />
//       <label className="custom-control-label" htmlFor="credit">
//         Credit card
//                   </label>
//     </div>
//     <div className="custom-control custom-radio">
//       <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" />
//       <label className="custom-control-label" htmlFor="debit">
//         Debit card
//                   </label>
//     </div>
//     <div className="custom-control custom-radio">
//       <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" />
//       <label className="custom-control-label" htmlFor="paypal">
//         Paypal
//                   </label>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-md-6 mb-3">
//       <label htmlFor="cc-name">Name on card</label>
//       <input type="text" className="form-control" id="cc-name" placeholder="" />
//       <small className="text-muted">Full name as displayed on card</small>
//       <div className="invalid-feedback">Name on card is required</div>
//     </div>
//     <div className="col-md-6 mb-3">
//       <label htmlFor="cc-number">Credit card number</label>
//       <input type="text" className="form-control" id="cc-number" placeholder="" />
//       <div className="invalid-feedback">Credit card number is required</div>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-md-3 mb-3">
//       <label htmlFor="cc-expiration">Expiration</label>
//       <input type="text" className="form-control" id="cc-expiration" placeholder="" />
//       <div className="invalid-feedback">Expiration date required</div>
//     </div>
//     <div className="col-md-3 mb-3">
//       <label htmlFor="cc-expiration">CVV</label>
//       <input type="text" className="form-control" id="cc-cvv" placeholder="" />
//       <div className="invalid-feedback">Security code required</div>
//     </div>
//   </div>
//   <hr className="mb-4" />
//   <button className="btn btn-primary btn-lg btn-block" type="submit">
//     Continue to checkout
//               </button>