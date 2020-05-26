import React, {useState} from 'react';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'; 
import {Link, Route} from 'react-router-dom'; 


const initialFormValues = {
  name: "",
  email: "",
  password: "",
};

const initialUsers = [];

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {

    const name = evt.target.name
    const value = evt.target.value 

    setFormValues({
      ...formValues,
      [name]: value, 
    })

  }

  return (

      <div>

        <Route path="/login">
        <LogIn formValues={formValues} onInputChange={onInputChange} />
        </Route>
        
        <Route path="/signup">
        <SignUp formValues={formValues} onInputChange={onInputChange}/>
        </Route> 
  
      </div>

  );
}

export default App;
