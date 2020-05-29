import React, { useState, useEffect } from 'react';
import { FormContainer } from '../styledComponents';
import { Link, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useSelector, useDispatch } from 'react-redux';
import UserNavBar from './UserNavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Profile = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userReducer.user.id);
  console.log('id:', id);
  const username = useSelector((state) => state.userReducer.user.username);
  console.log('username:', username);

  dispatch({ type: 'SAVE_ID', payload: localStorage.getItem('id') });
  dispatch({ type: 'SAVE_USERNAME', payload: localStorage.getItem('username') });

  const [formValues, setFormValues] = useState({
    username: username,
    password: '',
  });
  console.log(formValues);

  const notify = () => {
    toast.success('Password has been successfully changed!', { position: toast.POSITION.TOP_CENTER });
  };

  function onInputChange(e) {
    setFormValues({ username: username, password: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .put(`/users/${id}`, formValues)
      .then((res) => {
        console.log(res);
        notify();
      })
      .catch((err) => console.error(err));

    setFormValues({
      username: username,
      password: '',
    });
  }

  function deleteAccount() {
    axiosWithAuth()
      .delete(`/users/${id}`)
      .then((res) => {
        push('/');
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <UserNavBar />
      <div className="profile-form">
        <FormContainer>
          <div className="formBox">
            <h1> Change Password </h1>
            <form onSubmit={onSubmit}>
              <label>
                Name: <input value={username} name="username" placeholder={username} />
              </label>

              <label>
                <span> Password:</span>
                <input value={formValues.password} onChange={onInputChange} name="password" type="text" />
              </label>

              <button> Change Password </button>
            </form>
          </div>
        </FormContainer>
        <button onClick={deleteAccount}>Delete Account</button>
      </div>
    </>
  );
};
export default Profile;
