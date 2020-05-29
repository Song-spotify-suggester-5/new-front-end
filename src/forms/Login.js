import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from '../styledComponents';
import { DotScale } from 'styled-loaders-react';
import { useSelector } from 'react-redux';

export default function LogIn(props) {
  const { formValues, onInputChange, LoginSubmit, isLoading, removeLoginError } = props;

  let LoginError = useSelector((state) => state.userReducer.LoginError);

  console.log(LoginError);

  return (
    <FormContainer>
      <div className="formBox">
        <h1> Log In </h1>
        <form onSubmit={LoginSubmit}>
          <label>
            <span> Username: </span>
            <input value={formValues.username} onChange={onInputChange} name="username" type="text" />
          </label>

          <label>
            <span> Password:</span>
            <input value={formValues.password} onChange={onInputChange} name="password" type="text" />
          </label>
          {LoginError && <h5 className="error"> {LoginError}</h5>}
          {isLoading ? <DotScale color="#1DB954" /> : <button> Log In </button>}
        </form>
      </div>

      <div className="switch">
        <p>Need to make an account?</p>
        <button>
          {' '}
          <Link to="/signup" onClick={() => removeLoginError()}>
            Sign up
          </Link>{' '}
        </button>
      </div>
    </FormContainer>
  );
}
