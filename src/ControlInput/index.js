import * as React from "react";
import { css } from "@emotion/css";

const FormStyles = css`
  color: #fff;
  background: #2a2c37;
  border-radius: 6px;
  padding: 15px;
  .Form {
    &-Input {
      width: 100%;
      border: 1px solid transparent;
      color: #fff;
      background: #1d1e26;
      padding: 10px 15px;
      margin-bottom: 5px;
      border-radius: 6px;
      outline: 0;
      &:focus {
        border-color: #50fa7b;
      }
    }
    &-Textarea {
      min-height: 80px;
      resize: none;
    }
    &-Button {
      border: 2px solid #50fa7b;
      color: #50fa7b;
      background: none;
      padding: 10px 15px;
      border-radius: 6px;
      outline: 0;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

export default function Form() {
  //   const [error, setError] = React.useState(null);
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.elements.firstName.value);
    console.log(formValues);
  }

  //   function handleChangeFirstName(event) {
  //     console.log(event.target.id);
  //     console.log(event.target.value);
  //     const { value } = event.target;
  //     setError(
  //       value === value.toLowerCase() ? null : "Please use lower case only"
  //     );
  //   }

  function onHandleChange(event) {
    const { id, value } = event.target;
    console.log({ [id]: value });
    setFormValues({
      ...formValues,
      [id]: value.toLowerCase(),
    });
  }

  return (
    <form className={FormStyles} onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        className="Form-Input"
        onChange={onHandleChange}
        value={formValues.firstName}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        className="Form-Input"
        onChange={onHandleChange}
        value={formValues.lastName}
      />

      <button type="submit" className="Form-Button">
        Submit
      </button>
    </form>
  );
}
