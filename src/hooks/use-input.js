import { useState } from "react";

const useInput = (validateInput) => {
  const [value, setValue] = useState("");
  const [isValueFieldTouched, setIsValueFieldTouched] = useState(false);

  const enteredInputIsValid = validateInput(value);
  const isValueInputInvalid = !enteredInputIsValid && isValueFieldTouched;

  const onInputChangeEventHandler = (event) => {
    setValue(event.target.value);
  };

  const onInputBlurEventHandler = () => {
    setIsValueFieldTouched(true);
  };

  const resetInputValue = () => {
    setValue("");
  };

  const resetBlurValue = () => {
    setIsValueFieldTouched(false);
  };

  return {
    value,
    resetInputValue,
    resetBlurValue,
    enteredInputIsValid,
    isValueInputInvalid,
    onInputChangeEventHandler,
    onInputBlurEventHandler,
  };
};

export default useInput;
