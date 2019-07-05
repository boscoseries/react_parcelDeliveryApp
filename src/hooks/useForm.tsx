import { useState } from "react";

export default function useForm(callback: any) {
  const [inputValues, setInputValues] = useState({});

  const handleChange = (e: any) => {
    const newName = e.target.value;
    const key = e.target.name;
    return setInputValues({
      ...inputValues,
      [key]: newName
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    callback(e);
  };

  return {
    handleChange,
    handleSubmit
  };
}
