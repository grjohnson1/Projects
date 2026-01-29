import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event){
    event.preventDefault();

    console.log(enteredValues);
    setEnteredValues({
      email: '',
      password: ''
    });
  }

  function handleInputChange(identifier, value){
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier,event){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid && 'Please enter a valid email address.'}
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)} 
          value={enteredValues.email}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid && 'Password must be at least 6 characters long.'}
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
