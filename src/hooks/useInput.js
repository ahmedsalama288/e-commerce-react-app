import { useState, useCallback } from "react";

const defaultCheckInputValidation = (value) => value.trim() !== "";

const useInput = (
  initialValue,
  checkInputValidation = defaultCheckInputValidation
) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback(
    (event) => {
      const inputValue = event.target.value;
      setValue(inputValue);
      setIsValid(checkInputValidation(inputValue));
    },
    [checkInputValidation]
  );

  const showIsVaildInputValue = (showIsVaild = true) => {
    if (showIsVaild) return isValid;
    else return true;
  };

  const clearInputVlaue = () => {
    setValue("");
    setIsValid(checkInputValidation(""));
  };

  const changeIsValidState = (booleanValue) => {
    setIsValid(booleanValue);
  };

  return {
    value,
    isValid,
    onChange: handleChange,
    showIsVaildInputValue,
    changeIsValidState,
    clearInputVlaue,
  };
};

export default useInput;
