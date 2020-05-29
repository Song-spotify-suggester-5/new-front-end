import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from '../styledComponents';
import { DotScale } from 'styled-loaders-react';
import {useSelector} from 'react-redux'

export default function SignUp(props) {
  const { formValues, onInputChange, errors, SignupSubmit, isLoading, removeSigninError } = props;

  let SigninError = useSelector((state) => state.userReducer.SigninError);

  return (
    <FormContainer>
      <div className="formBox">
        <h1> Sign Up </h1>
        <form onSubmit={SignupSubmit}>
          <label>
            <span> Username: </span>
            <input value={formValues.name} onChange={onInputChange} name="username" type="text" />
          </label>
          <div className="errors">{errors.username}</div>

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
          <Link to="/" onClick={() => removeSigninError()}>
            Log In
          </Link>{' '}
        </button>
      </div>
    </FormContainer>
  );
}
