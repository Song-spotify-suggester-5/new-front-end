//React 1 guy


import React from "react";
import {Link} from "react-router-dom"


export default function SignUp(props) {
  const { formValues, onInputChange } = props;

  return (
      <div>
    <form>
      <h1> Sign up </h1>

      <label>
        <h3>Name</h3>
        <input
          value={formValues.name}
          onChange={onInputChange}
          name="email"
          type="text"
        />
      </label>

      <label>
        <h3>Email</h3>
        <input
          value={formValues.email}
          onChange={onInputChange}
          name="email"
          type="text"
        />
      </label>

      <label>
        <h3>Password</h3>
        <input
          value={formValues.password}
          onChange={onInputChange}
          name="password"
          type="text"
        />
      </label>
      <br />
      <button> Sign Up </button>

    </form>

    <p>Already have an account?</p>
    <button> <Link to="/login">Log In </Link></button>
    </div>
  );
}