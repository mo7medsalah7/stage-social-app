import { useEffect, useState } from "react";

// #initial values are blank and stired in blank object
// useEffect, so when refreshing page the inputs are set to initial
//

function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    const { name, value, type } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.values;
    }

    setInputs({
      // copy the existing state

      ...inputs,
      [name]: value,
    });
  }

  function resetForm(e) {
    setInputs(initial);
  }

  function clearForm(e) {
    e.preverntDefault();
    const blancState = Object.entries(inputs).map(([key, value]) => [key, ""]);
    return blancState;
  }

  return { inputs, handleChange, resetForm, clearForm };
}

export default useForm;
