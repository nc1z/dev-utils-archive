import React, { useEffect } from 'react';

export const Login = ({ onSubmit }: any) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit(username, password);
    setUsername('');
    setPassword('');
    setIsDisabled(true);
  }

  function handleChangeUsername(event: any) {
    setUsername(event.target.value.toLowerCase());
  }

  function handleChangePassword(event: any) {
    setPassword(event.target.value.toLowerCase());
  }

  useEffect(() => {
    if (password !== '' && username !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          id="username-input"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <button id="login-button" type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Login;
