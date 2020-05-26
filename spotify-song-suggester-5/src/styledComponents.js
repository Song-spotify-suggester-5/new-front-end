import styled from "styled-components";

const FormContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  font-family: "Montserrat", sans-serif;
  color: #1DB954;  
  /* border: 2px solid #1DB954; 
  border-radius: 6px; 
  width: 35%; 
  margin: 10% auto; 
  background-color: #121212;  */ 

  /* * {
    border: 1px solid white;
  } */

  .formBox {
    color: #1DB954; 
  border: 3px solid #1DB954; 
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
      color: #B3B3B3; 
  }

  button {
      border: 2px solid #B3B3B3;  
      border-radius: 5px; 
      width: 80px; 
      height: 40px; 
      text-align: center; 
      font-size: 1.1em; 
      background-color: black; 
      color: #B3B3B3; 

      :hover{
        border: 3px solid #1DB954;
        color: #1DB954; 
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

export { FormContainer };
