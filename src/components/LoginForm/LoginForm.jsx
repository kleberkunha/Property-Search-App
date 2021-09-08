import React from 'react';
import { Link } from "react-router-dom";
import { loginFetch } from 'services/apiManager';
import { useState } from 'react';
import { useDispatch } from "react-redux";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const userData = {
        user: {
            email: email,
            password: password
        }
    };

      await dispatch(loginFetch(userData))
    }
};

  return (
    <div>
      <form className="login-form" onSubmit={ (e) => handleLogin(e) }>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputEmail4" className="text-white">E-mail*</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4" className="text-white">Password*</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </div>
        </div>
        <div className="forgot-password mt-3">
          <Link>Forgot password</Link>
        </div>
        <button type="button" className="btn btn-light login-button mt-3">Login</button>
        <button type="button" className="btn btn-light register-button">Register</button>
      </form>
    </div>
  );
};

export default LoginForm;