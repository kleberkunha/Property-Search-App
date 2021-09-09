import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div className="default-background d-flex align-items-center py-5">
      <div className="d-flex justify-content-center col-12 my-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;