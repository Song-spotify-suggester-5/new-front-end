//React 1 guy

import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from '../styledComponents';

export default function SignUp(props) {
  const { formValues, onInputChange, errors, SignupSubmit, SigninError } = props;

  return (
    <FormContainer>
      <div className="formBox">
        <h1> Sign Up </h1>
        <form onSubmit={SignupSubmit}>
          <label>
            <span>Name: </span>
            <input value={formValues.username} onChange={onInputChange} name="username" type="text" />
          </label>
          <div className="errors">{errors.name}</div>

          {/* <label>
            <span> Email: </span>
            <input value={formValues.email} onChange={onInputChange} name="email" type="text" />
          </label>
          <div className="errors">{errors.email}</div> */}

          <label>
            <span> Password:</span>
            <input value={formValues.password} onChange={onInputChange} name="password" type="text" />
          </label>
          <div className="errors">{errors.password}</div>
          {SigninError && <h5 className="error"> Network Error: {SigninError}</h5>}
          <button> Sign Up </button>
        </form>
      </div>

      <div className="switch">
        <p>Already have an account?</p>
        <button>
          {' '}
          <Link to="/">Log In</Link>{' '}
        </button>
      </div>
    </FormContainer>
  );
}
