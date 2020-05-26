//React 1 guy


import React from "react";
import {Link} from "react-router-dom"; 
import {FormContainer} from "../styledComponents";


export default function SignUp(props) {
  const { formValues, onInputChange, errors } = props;

  return (
    <FormContainer>
    <div className="formBox">
      <h1> Sign Up </h1>
    <form>
       <label>
      <span>Name: </span>
       <input
          value={formValues.name}
          onChange={onInputChange}
          name="name"
          type="text"
        />
       
      </label>
      <div className="errors">{errors.name}</div>


      <label>
        <span> Email: </span>
        <input
          value={formValues.email}
          onChange={onInputChange}
          name="email"
          type="text"
        />
       
      </label>
      <div className="errors">{errors.email}</div>

      <label>
        <span> Password:</span>
        <input
          value={formValues.password}
          onChange={onInputChange}
          name="password"
          type="text"
        />
        
      </label>
      <div className="errors">{errors.password}</div>

      <button> Log In </button>
    </form>

    </div>

    <div className='switch'>

    <p>Already have an account?</p>
    <button> <Link to="/login">Sign up</Link> </button>

    </div>

    </FormContainer>
  );
}
