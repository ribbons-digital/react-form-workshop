import * as React from "react";

import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  //   const [formValues, setFormValues] = React.useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     age: 18,
  //   });

  async function onSubmit(data) {
    console.log(data);
    setError("age", {
      type: "min",
      message: "Please enter a number that's equal to or greater than 18",
    });
  }

  //   function onHandleChange(event) {
  //     const { id, value } = event.target;
  //     console.log({ [id]: value });
  //     setFormValues({
  //       ...formValues,
  //       [id]: value,
  //     });
  //   }

  console.log(errors);

  return (
    <form
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="firstName">First Name:</label>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && (
        <span style={{ color: "red" }}>This field is required</span>
      )}

      <label htmlFor="lastName">Last Name:</label>
      <input {...register("lastName")} />

      <label htmlFor="email">Email:</label>
      <input {...register("email")} />

      <label htmlFor="age">Age:</label>
      <input
        {...register("age", {
          required: true,
          min: {
            value: 18,
            message:
              "Please enter a number that's equal to or greater than 18.",
          },
        })}
      />
      {errors.age?.type === "min" && (
        <span style={{ color: "red" }}>{errors.age?.message}</span>
      )}
      {errors.age?.type === "required" && (
        <span style={{ color: "red" }}>This field is required</span>
      )}

      <button type="submit" className="Form-Button">
        Submit
      </button>
    </form>
  );
}
