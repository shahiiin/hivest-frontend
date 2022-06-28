import { useState } from "react";

export default function useForm(init = {}) {
  let [inputs, setInputs] = useState(init);

  const resetForm = () => setInputs(init);

  // TODO: clearForm  /// const clearForm = () => {}

  // javascript: closure
  const handleChange = (e) => {
    let { value, name, type } = e.target;

    setInputs({
      ...inputs, // rest paramters in javascript
      [name]: value, // key : value { [] :  } // dynamic set key in javascript
    });
  };

  return {
    inputs,
    handleChange,
    resetForm,
  };
}
