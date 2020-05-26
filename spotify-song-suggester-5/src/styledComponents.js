import styled from "styled-components";


const FormContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  font-family: "Montserrat", sans-serif;
  color: #1db954;

  /* * {
    border: 1px solid white;
  } */

  .formBox {
    color: #1db954;
    border: 3px solid white;
    border-radius: 6px;
    width: 35%;
    margin: 10% auto;
    margin-bottom: 5%;
    background-color: #121212;
  }

  h1 {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #b3b3b3;
  }

  button {
    border: 2px solid #b3b3b3;
    border-radius: 5px;
    width: 90px;
    height: 40px;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    background-color: black;
    color: #b3b3b3;

    :hover {
      border: 3px solid #1db954;
      color: #1db954;
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
    align-content: right;
  }

  .switch {
    /* text-align: center; */
    width: 27%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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

export { FormContainer, NavBarStyles };
