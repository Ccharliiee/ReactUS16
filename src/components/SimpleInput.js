import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";
import * as EmailValidator from "email-validator";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((name) => name.trim() !== "");

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
      resetNameInput();
      resetEmailInput();
    }
  };

  const fvalid4Sub = enteredNameIsValid && enteredEmailIsValid;

  return (
    <Form className="mb-3" onSubmit={formSubmissionHandler}>
      <div
        className={nameInputHasError ? "form-control invalid" : "form-control "}
      >
        <label htmlFor="name">Your Name</label>
        <input
          className="mb-3"
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <Form.Group
        className={
          emailInputHasError ? "form-control invalid mb-3" : "form-control mb-3"
        }
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be valid.</p>
        )}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <div className="form-actions">
        <Button type="submit" disabled={!fvalid4Sub}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SimpleInput;
