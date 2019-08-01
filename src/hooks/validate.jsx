export default function validate(values) {
  const errors = {};
  const password = new RegExp(values.password)

  if (!values.fullname || !/\w+\s+\w+.+/.test(values.fullname)) {
    errors.fullname = "Please enter Lastname and Firstname";
  }
  if (!values.email || !/\w+@\w+\.\w+.+/.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!values.phone || !/0\d{10}/.test(values.phone)) {
    errors.phone = "Password enter a valid 11 digits phone number";
  }
  if (!values.password || !/\D*\d+\w*/.test(values.password)) {
    errors.password = "Password should include a numeric character";
  }
  if (!values.passwordRepeat || !password.test(values.passwordRepeat)) {
    errors.passwordRepeat = "Passwords do not match";
  }
  return errors;
}
