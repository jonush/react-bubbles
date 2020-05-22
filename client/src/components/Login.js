import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [ credentials, setCredentials ] = useState({
    username: '',
    password: ''
  });

  const handleInput = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log('POST request for login', res);
        localStorage.setItem('token', res.data.payload)
        history.push('/bubble-page');
      })
      .catch(err => console.log(err));

    setCredentials({
      username: '',
      password: ''
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleInput}
            placeholder='Username'
          />
        </label>

        <label>
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleInput}
            placeholder='Password'
          />
        </label>

        <button onClick={handleSubmit}>Log In</button>
      </form>
    </>
  );
};

export default Login;