import React from 'react';
import { registerFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password && passwordConfirmation) {
      const userData = {
        user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
      }
      await dispatch(registerFetch(userData))
    }
};

  return (
    <div className="register-form px-4 py-5 rounded">
      <form className="" onSubmit={ (e) => handleLogin(e) }>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="text-white">Email*</label>
            <input type="email" className="form-control" placeholder="Your email"
            value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-white">Password*</label>
            <input type="password" className="form-control" placeholder="Your password"
            value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </div>
          <div className="form-group">
            <label htmlFor="password-confirmation" className="text-white">Password Confirmation*</label>
            <input type="password" className="form-control" placeholder="Confirm your password please"
            value={passwordConfirmation} onChange={ (e) => setPasswordConfirmation(e.target.value) }/>
          </div>
        </div>
        <input type="submit" className="btn btn-light register-btn mt-5 w-100" value="Sign Up" />
      </form>
    </div>
  );
};

export default RegisterForm;