import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';
import ProtectedRoute from './utils/ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';
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
const initialUsers = [];

function App() {
  let isLoading = useSelector((state) => state.userReducer.isLoading);
  // isLoading = true;
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

    const notify = () => {
      toast.success('Signup was succesful!', { position: toast.POSITION.TOP_CENTER });
    };

    dispatch({ type: 'NETWORK_REQUEST_START' });
    axios
      .post('https://bw-spotify-songs.herokuapp.com/api/auth/register', formValues)
      .then((res) => {
        console.log(res);
        notify();
        setFormValues({
          username: '',
          password: '',
        });
        dispatch({ type: 'NETWORK_REQUEST_SUCCESS' });
      })
      .catch((err) =>
        err.message.includes('409')
          ? dispatch({ type: 'SIGNIN_ERROR', payload: 'Username already exists' })
          : dispatch({ type: 'SIGNIN_ERROR', payload: 'Network Error: ' + err.message })
      );
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch({ type: 'NETWORK_REQUEST_START' });
    axiosWithAuth()
      .post('/auth/login', formValues)
      .then((res) => {
        console.log(res.data.id);
        console.log(res.data.username);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('username', res.data.username);

        setFormValues({
          username: '',
          password: '',
        });

        push('/songs');
      })
      .catch((err) => {
        localStorage.removeItem('token');
        err.message.includes('401')
          ? dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid username or password' })
          : dispatch({ type: 'LOGIN_ERROR', payload: err.message });
      });
  };

  return (
    <div>
      <ProtectedRoute path="/profile" component={Profile} />

      <ProtectedRoute path="/songs" component={SearchBar} />

      <ProtectedRoute path="/favorites" component={Favorites} />

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
