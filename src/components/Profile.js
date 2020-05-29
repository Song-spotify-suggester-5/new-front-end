import React, { useState } from 'react';
import { FormContainer } from '../styledComponents';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DotScale } from 'styled-loaders-react';

import UserNavBar from '../navbars/UserNavBar';

toast.configure();
const Profile = () => {
  //redux hooks
  const dispatch = useDispatch();
  let isLoading = useSelector((state) => state.userReducer.isLoading);
  const id = useSelector((state) => state.userReducer.user.id);

  const username = useSelector((state) => state.userReducer.user.username);

  //router hooks
  const { push } = useHistory();

  const [formValues, setFormValues] = useState({
    username: username,
    password: '',
  });

  dispatch({ type: 'SAVE_ID', payload: localStorage.getItem('id') });
  dispatch({ type: 'SAVE_USERNAME', payload: localStorage.getItem('username') });

  const notify = () => {
    toast.success('Password has been successfully changed!', { position: toast.POSITION.TOP_CENTER });
  };

  function onInputChange(e) {
    setFormValues({ username: username, password: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'NETWORK_REQUEST_START' });
    axiosWithAuth()
      .put(`/users/${id}`, formValues)
      .then((res) => {
        console.log(res);
        notify();
        dispatch({ type: 'NETWORK_REQUEST_SUCCESS' });
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

              {isLoading ? <DotScale color="#1DB954" /> : <button> Change Password </button>}
            </form>
          </div>
          <button onClick={deleteAccount}>Delete Account</button>
        </FormContainer>
      </div>
    </>
  );
};
export default Profile;
