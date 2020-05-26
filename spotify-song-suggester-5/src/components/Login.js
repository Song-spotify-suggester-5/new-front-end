//React 1 guy

import React from "react";
import {Link} from "react-router-dom";
import {FormContainer} from "../styledComponents";


export default function LogIn(props) {
  const { formValues, onInputChange } = props;

  return (
    <FormContainer>
    <div className="formBox">
      <h1> Log In </h1>
    <form>

      <label>
        <span> Email: </span>
        <input
          value={formValues.email}
          onChange={onInputChange}
          name="email"
          type="text"
        />
      </label>

      <label>
        <span> Password:</span>
        <input
          value={formValues.password}
          onChange={onInputChange}
          name="password"
          type="text"
        />
      </label>

      <button> Log In </button>
    </form>

    </div>

    <div className='switch'>

    <p>Need to make an account?</p>
    <button> <Link to="/signup">Sign up</Link> </button>

    </div>

    </FormContainer>
  );
}
