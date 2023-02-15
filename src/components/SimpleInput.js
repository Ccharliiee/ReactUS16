import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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
    console.log("disabled");
    event.preventDefault();
    setNameEnterStarted(true);

    if (enteredName.trim() === "") {
      return;
    }

    setEnteredName("");
    setNameEnterStarted(false);
  };

  const nameFieldIsValid = !nameEnterStarted || enteredName.trim() !== "";
  const fvalid4Sub = enteredName.trim() !== "";

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
        <Button disabled={!fvalid4Sub}>Submit</Button>
      </div>
    </form>
  );
};

export default SimpleInput;
