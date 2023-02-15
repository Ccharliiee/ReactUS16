import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";
import * as EmailValidator from "email-validator";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((email) => EmailValidator.validate(email));

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (fvalid4Sub) {
      console.log("firstNameValue, lastNameValue, emailValue");
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
    }
  };

  const fvalid4Sub =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div
          className={
            firstNameInputHasError ? "form-control invalid" : "form-control "
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            className="mb-3"
            type="text"
            id="name"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div
          className={
            lastNameInputHasError ? "form-control invalid" : "form-control "
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            className="mb-3"
            type="text"
            id="name"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div
        className={
          emailInputHasError ? "form-control invalid" : "form-control "
        }
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          className="mb-3"
          type="text"
          id="name"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be valid.</p>
        )}
      </div>
      <div className="form-actions">
        <Button type="submit" disabled={!fvalid4Sub}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default BasicForm;
