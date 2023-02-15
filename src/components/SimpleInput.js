import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameEnterStarted, setNameEnterStarted] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameEnterStarted(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameEnterStarted(true);

    if (enteredName.trim() === "") {
      return;
    }

    setEnteredName("");
    setNameEnterStarted(false);
  };

  const nameFieldIsValid = !nameEnterStarted || enteredName.trim() !== "";

  const nameInputClasses = nameFieldIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!nameFieldIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
