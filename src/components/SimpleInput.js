import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: name,
    resetInputValue: resetNameValue,
    resetBlurValue: resetNameInputTouched,
    enteredInputIsValid: isNameValid,
    isValueInputInvalid: isNameInputInvalid,
    onInputChangeEventHandler: onNameInputEventHandler,
    onInputBlurEventHandler: onNameBlurEventHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    resetInputValue: resetEmailValue,
    resetBlurValue: resetEmailInputTouched,
    enteredInputIsValid: isEmailValid,
    isValueInputInvalid: isEmailInputInvalid,
    onInputChangeEventHandler: onEmailInputEventHandler,
    onInputBlurEventHandler: onEmailBlurEventHandler,
  } = useInput((value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  });

  const formIsValid = isNameValid && isEmailValid; //Here we can add more validations depending on the amount of input fields.

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (!isNameValid && !isEmailValid) {
      return;
    }
    resetNameValue("");
    resetNameInputTouched();

    resetEmailValue("");
    resetEmailInputTouched();
  };

  const validNameInputFormClass = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const validEmailInputFormClass = isEmailInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitEventHandler}>
      <div className={validNameInputFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameInputEventHandler}
          onBlur={onNameBlurEventHandler}
        />
        <div>
          {isNameInputInvalid && <p className="error-text">Invalid Name</p>}
        </div>
      </div>
      <div className={validEmailInputFormClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={onEmailInputEventHandler}
          onBlur={onEmailBlurEventHandler}
        />
        <div>
          {isEmailInputInvalid && <p className="error-text">Invalid Email</p>}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
