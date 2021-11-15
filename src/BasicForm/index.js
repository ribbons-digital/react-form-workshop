import * as React from "react";

export default function Form() {
  function handleSubmit(event) {
    // event.preventDefault();
    console.log(event.target.elements.firstName.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" />
      <button type="submit">Submit</button>
    </form>
  );
}
