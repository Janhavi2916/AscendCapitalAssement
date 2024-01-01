import React, { useState } from 'react';

const AuthComponent = ({ setLoggedIn, setUser }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      // Implement API call for user login
      // Example using fetch:
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        setLoggedIn(true);
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      // Handle API call error
      console.error('API error', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthComponent;

