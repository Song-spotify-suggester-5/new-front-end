import React, {useState} from 'react';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'; 
import NavBar from './components/NavBar';
import {Route} from 'react-router-dom'; 
import * as yup from 'yup';
import formSchema from './formSchema'


const initialFormValues = {
  name: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};

const initialUsers = [];

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const onInputChange = evt => {

    const name = evt.target.name
    const value = evt.target.value 

    setFormValues({
      ...formValues,
      [name]: value, 
    })

    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

  }

  return (

      <div>

        <Route path='/'>
        <NavBar /> 
        </Route>
        <Route path="/login">
        <LogIn formValues={formValues} onInputChange={onInputChange} />
        </Route>
        
        <Route path="/signup">
        <SignUp formValues={formValues} onInputChange={onInputChange} errors={formErrors}/>
        </Route> 
  
      </div>

  );
}

export default App;
