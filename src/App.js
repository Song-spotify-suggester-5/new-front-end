import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';
import ProtectedRoute from './utils/ProtectedRoute';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';

// import components
import './App.css';
import LogIn from './forms/Login.js';
import SignUp from './forms/SignUp';
import NavBar from './navbars/NavBar';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Profile from './components/Profile';

const initialFormValues = {
  usernname: '',
  // email: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  // email: '',
  password: '',
};

toast.configure();
function App() {
  //redux hooks
  let isLoading = useSelector((state) => state.userReducer.isLoading);
  const dispatch = useDispatch();
  const SigninError = useSelector((state) => state.userReducer.SigninError);
  const LoginError = useSelector((state) => state.userReducer.LoginError);
  const accountDeleted = useSelector((state) => state.userReducer.accountDeleted);
  console.log(accountDeleted);
  //router hooks
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
  };

  const notify_delete = () => {
    accountDeleted && toast.error('Account was succesfully deleted!', { position: toast.POSITION.TOP_CENTER });
  };
  notify_delete();

  const SignupSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'NETWORK_REQUEST_START' });

    const notify_success = () => {
      toast.success('Signup was succesful!', { position: toast.POSITION.TOP_CENTER });
    };

    dispatch({ type: 'NETWORK_REQUEST_START' });
    axios
      .post('https://bw-spotify-songs.herokuapp.com/api/auth/register', formValues)
      .then((res) => {
        console.log(res);
        notify_success();
        setFormValues({
          username: '',
          password: '',
        });
        dispatch({ type: 'NETWORK_REQUEST_SUCCESS' });
      })
      .catch((err) => {
        err.message.includes('409')
          ? dispatch({ type: 'SIGNIN_ERROR', payload: 'Username alrady exists, try a different one' })
          : dispatch({ type: 'SIGNIN_ERROR', payload: 'Network Error: ' + err.message });

        setFormValues({
          username: '',
          password: '',
        });
      });
  };

  const LoginSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'NETWORK_REQUEST_START' });
    axiosWithAuth()
      .post('/auth/login', formValues)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('username', res.data.username);

        setFormValues({
          username: '',
          password: '',
        });
        dispatch({ type: 'NETWORK_REQUEST_SUCCESS' });
        push('/songs');
      })
      .catch((err) => {
        localStorage.removeItem('token');
        err.message.includes('401')
          ? dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid username or password, please try again' })
          : dispatch({ type: 'LOGIN_ERROR', payload: err.message });

        setFormValues({
          username: '',
          password: '',
        });
      });
  };

  return (
    <div>
      <ProtectedRoute path="/profile" component={Profile} />

      <ProtectedRoute path="/songs" component={SearchBar} />

      <ProtectedRoute path="/favorites" component={Favorites} />

      <Route
        path="/about"
        component={() => (window.location = 'https://reverent-archimedes-5b8a13.netlify.app/about.html')}
      />
      <Route exact path="/">
        <NavBar />
        <LogIn
          formValues={formValues}
          onInputChange={onInputChange}
          LoginSubmit={LoginSubmit}
          LoginError={LoginError}
          isLoading={isLoading}
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
          isLoading={isLoading}
        />
      </Route>
    </div>
  );
}

export default App;
