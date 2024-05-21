import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  // References for form inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);

  // State for form values and validation messages
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Input validation
    let message = "";
    if (name === "name" && value.length < 3) {
      message = "Name must be at least 3 characters long";
    } else if (
      name === "email" &&
      (!value.includes("@") || !value.includes("."))
    ) {
      message = "Invalid email address";
    } else if (name === "age" && (isNaN(value) || value < 18 || value > 99)) {
      message = "Age must be a number between 18 and 99";
    }

    setValidationMessages({
      ...validationMessages,
      [name]: message,
    });
  };

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic
    if (
      !validationMessages.name ||
      !validationMessages.email ||
      !validationMessages.age
    ) {
      console.log("Form Data:", formValues);
      alert("Form submitted successfully");
    }
    if (
      !validationMessages.name &&
      !validationMessages.email &&
      !validationMessages.age
    ) {
      console.log("Form Data:", formValues);
      alert("Form submitted successfully");
    } else {
      alert("Please fix the validation errors");
    }
  };

  return (
    <div className="App">
      <h1>Advanced Form Handling with useRef</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              ref={nameRef}
            />
          </label>
          {validationMessages.name && (
            <span className="error">{validationMessages.name}</span>
          )}
          <button type="button" onClick={() => handleFocus(nameRef)}>
            Focus Name
          </button>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              ref={emailRef}
            />
          </label>
          {validationMessages.email && (
            <span className="error">{validationMessages.email}</span>
          )}
          <button type="button" onClick={() => handleFocus(emailRef)}>
            Focus Email
          </button>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formValues.age}
              onChange={handleInputChange}
              ref={ageRef}
            />
          </label>
          {validationMessages.age && (
            <span className="error">{validationMessages.age}</span>
          )}
          <button type="button" onClick={() => handleFocus(ageRef)}>
            Focus Age
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
