import LoginForm from "components/LoginForm/LoginForm";
// import { Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Login = () => {

  // const userState = useSelector((state) => state.users);

  return (
    <>
      <div className="backgroundLogin">
        <div className="help-recize-background">
          <div className="container-fluid main-content-login">
            <div className="row">
              <div className="col-sm">
                <div className="container subContent-login">
                  <div className="row">
                    <div className="col-sm">
                      <div className="box-dark-login rounded">
                      <LoginForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Login;