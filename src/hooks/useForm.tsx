import { useState, useEffect } from "react";

export default function useForm(submitCallback: any, validateCallback: any) {
  // set state for form inputs
  let [inputValues, setInputValues] = useState<any>({});
  // set state for errors
  const [errors, setErrors] = useState<any>({});
  // set state for form submission
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    const targetValue = e.target.value;
    const name = e.target.name;

    return setInputValues({
      ...inputValues,
      [name]: targetValue
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>): any => {
    e.preventDefault();
    e.persist()
    console.log(e.target)
    // re-set submitted status to false
    setSubmitted(true);

    // create errors object at this point and export to form
    setErrors(validateCallback(inputValues));

    const inputKeys = Object.keys(inputValues);
    const errorObject = Object.keys(errors);

    inputKeys.forEach(input => {
      if (errorObject.includes(input)) {
        // re-set submitted to false
       return () => setSubmitted(false);
      }
    })
  };

  useEffect(() => {

    console.log(`submittedStatus is ${submitted}`);
    if (submitted && Object.keys(errors).length <= 3 && Object.keys(inputValues).length >= 2 && !Object.values(inputValues).includes("")) {
      submitCallback(inputValues);
      return;
    }
    console.error("form not submitted");
  }, [submitted, errors, validateCallback]);

  return {
    handleChange,
    handleSubmit,
    errors
  };
}
