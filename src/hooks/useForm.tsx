import { useState, useEffect } from "react";

export default function useForm(submitCallback: any, validateCallback: any) {
  // set state for form inputs
  let [inputValues, setInputValues] = useState<any>({});
  // set state for errors
  const [errors, setErrors] = useState<any>({});
  // set state for form submission
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newName = e.target.value;
    const key = e.target.name;

    return setInputValues({
      ...inputValues,
      [key]: newName
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    // create errors object at this point and export to form
    setErrors(validateCallback(inputValues));
    // re-set submitted to true
    setSubmitted(true);
  };

  useEffect(() => {
    if (!Object.keys(errors).length && submitted) {
      // validate on every inputValue change
      validateCallback(inputValues);
      // call submit function if above conditions are met
      submitCallback(inputValues);
    }
  }, [errors, submitted, inputValues, submitCallback, validateCallback]);

  return {
    handleChange,
    handleSubmit,
    errors
  };
}
