import axios from 'axios';

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: 'https://api.spotify.com',
  });
};

export default axiosWithAuth;
