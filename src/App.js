// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { loginUserWithCookie } from 'services/apiManager';
import Cookies from 'js-cookie';

// PAGES IMPORTS
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AdProfile from 'pages/Apartment/Apartment';
import UserProfile from 'pages/UserProfile/UserProfile';
import CreateProperty from 'pages/CreateProperty/CreateProperty';
import Conditions from 'pages/Conditions/conditions';
import Apartment from 'pages/Apartment/Apartment';
import NotFound from 'pages/NotFound/NotFound';

// COMPONENTS IMPORTS
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/footer';
import Loading from 'components/Loading/Loading';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';


function App() {

  const login = useSelector((state) => state.users.login);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth().then(res => {
      setLoading(true);
    })
  }, []);


  const checkAuth = async() => {
    return await (loginUserWithCookie());
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <>
      { loading ? ( 
        < Route {...rest} render={ props => ( isAuth ? ( <Component {...props} />) : (  <Redirect to={{ pathname: '/login' }} /> ) )} />)
        : (
          <Loading type='spin' color='#454545' />
        )
      }
    </>
  );

  const isAuth = () => {
    return (
      login === '' &&
        Cookies.get('token_cookie') === undefined ? false : true)
  };

  return (
      <>
      <BrowserRouter>
          <HamburgerMenu auth={isAuth()}/>
          <Navbar auth={ isAuth() }/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login">
              { isAuth() ? <Redirect to="/" /> : <Login /> }
            </Route>
            <Route path="/register">
              { isAuth() ? <Redirect to="/" /> : <Register /> }
            </Route>
            <Route path="/listing/:slug" exact component={Apartment}/>
            <Route path="/ApartmentsProfile" component={AdProfile} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/create-property" component={CreateProperty}/>
            <Route path="/conditions" component={Conditions}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
