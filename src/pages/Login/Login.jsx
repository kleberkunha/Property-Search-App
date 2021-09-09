import LoginForm from "components/LoginForm/LoginForm";
// import { Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Login = () => {

  // const userState = useSelector((state) => state.users);

  return (
    <>
      <div className="login-Background d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <LoginForm />
        </div>
      </div>
    </>
  )
}


export default Login;