import { useState } from "react";

const useInput = (initialValue, checkInputValidation) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setIsValid(checkInputValidation(inputValue));
  };

  const showIsVaildInputValue = (showIsVaild = true) => {
    if (showIsVaild) return isValid;
    else return true;
  };

  const clearInputVlaue = () => {
    setValue("");
    setIsValid(checkInputValidation(""))
  };

  return {
    value,
    isValid,
    onChange: handleChange,
    showIsVaildInputValue,
    clearInputVlaue,
  };
};

export default useInput;
