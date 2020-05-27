import styled from 'styled-components';

const FormContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  font-family: 'Montserrat', sans-serif;
  color: #121212;
  font-weight: bold;

  /* * {
    border: 1px solid white;
  } */

  .formBox {
    color: #121212;
    border-bottom: 1px solid #121212;
    border-top: 1px solid #121212;
    border-radius: 0px;
    width: 35%;
    margin: 6% auto;
    margin-bottom: 3%;
    background-color: white;
  }

  h1 {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #121212;

    :hover {
      color: #1db954;
    }
  }

  button {
    /* border: 2px solid #121212; */
    border-radius: 20px;
    width: 150px;
    height: 40px;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    background-color: #1db954;
    color: white;

    :hover {
      border: 3px solid #1db954;
      color: white;
      filter: brightness(110%);
    }
  }

  form {
    margin: 7% auto;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }

  label {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 60%;
    margin: 10% auto;
    margin-bottom: 7%;
  }

  input {
    height: 20px;
    width: 170px;
    align-content: right;
  }

  .switch {
    /* text-align: center; */
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;

    a {
      color: white;
      :hover {
        color: white;
      }
    }
  }
`;

const NavBarStyles = styled.div`
  header {
    background-color: #121212;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 5%;
  }

  .header-logo {
    width: 8%;
  }

  img {
    width: 100%;
  }

  header .header-links {
    width: 25%;
    display: flex;
    justify-content: space-around;
  }

  header .header-links a {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;

    :hover {
      color: #1db954;
    }
  }
`;

const UserNavBarStyles = styled.div`
  header {
    background-color: #121212;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 5%;
  }

  .header-logo {
    width: 8%;
  }

  img {
    width: 100%;
  }

  header .header-links {
    width: 25%;
    display: flex;
    justify-content: space-around;
  }

  header .header-links a {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;

    :hover {
      color: #1db954;
    }
  }
`;
export { FormContainer, NavBarStyles, UserNavBarStyles };
