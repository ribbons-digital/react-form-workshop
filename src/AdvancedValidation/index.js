import * as React from "react";
import * as yup from "yup";
import { css } from "@emotion/css";

const schema = yup.object({
  firstName: yup.string().required("This is a required field"),
  lastName: yup.string().required(),
  email: yup.string().email(),
  age: yup.number().min(18),
});

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
    email: "",
    age: 18,
  });

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(formValues);

    try {
      await schema.validate(formValues, { abortEarly: false });
      console.log("good!");
    } catch (err) {
      console.log(err.errors);
    }
  }

  function onHandleChange(event) {
    const { id, value } = event.target;
    console.log({ [id]: value });
    setFormValues({
      ...formValues,
      [id]: value,
    });
  }

  return (
    <form className={FormStyles} onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        className="Form-Input"
        onChange={onHandleChange}
        value={formValues.firstName}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        type="test"
        className="Form-Input"
        onChange={onHandleChange}
        value={formValues.lastName}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        className="Form-Input"
        onChange={onHandleChange}
        value={formValues.email}
      />

      <label htmlFor="age">Age:</label>
      <input
        id="age"
        type="number"
        className="Form-Input"
        onChange={onHandleChange}
        value={formValues.age}
      />

      <button type="submit" className="Form-Button">
        Submit
      </button>
    </form>
  );
}
