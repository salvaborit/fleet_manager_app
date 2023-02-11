import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something on submit
  };

    // call login API endpoint with username and password
    // set authentication token in local storage
    // handle any errors and set errorMessage

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={username}
        onChange={handleChange}
        />
        <input
        type="password"
        name="password"
        placeholder='Contraseña' />
        <SubmitButton/>
        </form>
        )
}

export default LoginForm;
