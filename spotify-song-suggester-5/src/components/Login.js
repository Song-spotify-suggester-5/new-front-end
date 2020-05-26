//React 1 guy

import React from "react";
import {Link} from "react-router-dom"

export default function LogIn(props) {
  const { formValues, onInputChange } = props;

  return (
    <div>
    <form>
      <h1> Log In </h1>

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

      <button> Log In </button>
    </form>

    <p>Need to make an account?</p>
    <button> <Link to="/signup">Sign up</Link> </button>

    </div>
  );
}
