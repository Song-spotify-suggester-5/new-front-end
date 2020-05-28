import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';
// import components
import './App.css';
import LogIn from './forms/Login.js';
import SignUp from './forms/SignUp';
import NavBar from './components/NavBar';
import UserNavBar from './components/UserNavBar';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import { useSelector, useDispatch } from 'react-redux';

const initialFormValues = {
  username: '',
  // email: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  // email: '',
  password: '',
};

const initialUsers = [];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const SigninError = useSelector((state) => state.userReducer.SigninError);
  const LoginError = useSelector((state) => state.userReducer.LoginError);

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    //change
  };

  const SignupSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch({ type: 'NETWORK_REQUEST_START' });
    axios
      .post('https://bw-spotify-songs.herokuapp.com/api/auth/register', formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => dispatch({ type: 'SIGNIN_ERROR', payload: err.message }));
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch({ type: 'NETWORK_REQUEST_START' });
    axiosWithAuth()
      .post('https://bw-spotify-songs.herokuapp.com/api/auth/login', formValues)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        push('/songs');

        setFormValues({
          username: '',
          password: '',
        });
      })
      .catch((err) => {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGIN_ERROR', payload: err.message });
      });
  };

  return (
    <div>
      <Route path="/songs">
        <UserNavBar />
        <SearchBar />
      </Route>

      <Route path="/favorites">
        <UserNavBar />
        <Favorites />
      </Route>

      <Route exact path="/">
        <NavBar />
        <LogIn
          formValues={formValues}
          onInputChange={onInputChange}
          LoginSubmit={LoginSubmit}
          LoginError={LoginError}
        />
      </Route>

      <Route path="/signup">
        <NavBar />
        <SignUp
          formValues={formValues}
          onInputChange={onInputChange}
          errors={formErrors}
          SignupSubmit={SignupSubmit}
          SigninError={SigninError}
        />
      </Route>
    </div>
  );
}

export default App;
