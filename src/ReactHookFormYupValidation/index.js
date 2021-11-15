import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  firstName: yup.string().required("This is a required field"),
  lastName: yup.string().required(),
  email: yup.string().email(),
  age: yup.number().min(18),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log(data);
  }

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
      {errors.email && <p style={{ color: "red" }}>{errors.email?.message}</p>}

      <label htmlFor="age">Age:</label>
      <input
        {...register("age", { required: true, min: 18 })}
        defaultValue={18}
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age?.message}</p>}

      <button type="submit" className="Form-Button">
        Submit
      </button>
    </form>
  );
}
