import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';

// import components
import './App.css';
import LogIn from './forms/Login';
import SignUp from './forms/SignUp';
import NavBar from './components/NavBar';
import UserNavBar from './components/UserNavBar';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';

const initialFormValues = {
  name: '',
  // email: '',
  password: '',
};

const initialFormErrors = {
  name: '',
  // email: '',
  password: '',
};

const initialUsers = [];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  console.log(formValues);

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

  const SignupSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://bw-spotify-songs.herokuapp.com/api/auth/register', formValues)
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));
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

      <Route path="/login">
        <NavBar />
        <LogIn formValues={formValues} onInputChange={onInputChange} />
      </Route>

      <Route path="/signup">
        <NavBar />
        <SignUp formValues={formValues} onInputChange={onInputChange} errors={formErrors} SignupSubmit={SignupSubmit} />
      </Route>
    </div>
  );
}

export default App;
