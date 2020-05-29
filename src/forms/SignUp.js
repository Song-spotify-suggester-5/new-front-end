import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from '../styledComponents';
import { DotScale } from 'styled-loaders-react';

export default function SignUp(props) {
  const { formValues, onInputChange, errors, SignupSubmit, SigninError, isLoading } = props;

  return (
    <FormContainer>
      <div className="formBox">
        <h1> Sign Up </h1>
        <form onSubmit={SignupSubmit}>
          <label>
            <span>Name: </span>
            <input value={formValues.username} onChange={onInputChange} name="username" type="text" />
          </label>
          <div className="error">{errors.name}</div>

          <label>
            <span> Password:</span>
            <input value={formValues.password} onChange={onInputChange} name="password" type="text" />
          </label>
          <div className="error">{errors.password}</div>
          {SigninError && <h5 className="error"> {SigninError}</h5>}
          {isLoading ? <DotScale color="#1DB954" /> : <button> Sign Up </button>}
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
