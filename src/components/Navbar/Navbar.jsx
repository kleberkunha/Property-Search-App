import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logoutUser } from "services/apiManager";
import Cookies from 'js-cookie';
import logo from "assets/images/Artboard_1_copy.png";

const Navbar = ({auth}) => {
  
  const dispatch = useDispatch();

  const handleLogOut = () => {
    Cookies.remove('token_cookie')
    Cookies.remove("id_cookie");
    dispatch(logoutUser());
    window.location.reload();
  }
  
  
  return (
    <div className="navigation">
      <div className="nav-left col-6">
        <img src={logo} alt="logo" className='logo'></img>
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        {auth && (
          <NavLink exact to="/profile" activeClassName="nav-active">
            Profile
          </NavLink>
        )}
      </div>
      <div className="nav-right col-6 d-flex justify-content-end">
        {!auth && (
          <>
            <NavLink exact to="/register" className="btn btn-primary mx-2">
              Sign Up
            </NavLink>
            <NavLink exact to="/login" className="btn btn-primary mx-2">
              Log In
            </NavLink>
          </>
        )}
        {auth && (
          <>
            <NavLink exact to="/create-property" className="add-property">
              <i className="fas fa-plus-circle"></i>Ajouter une annonce
            </NavLink>
            <button
              onClick={() => handleLogOut()}
              className="btn btn-danger mx-2"
            >
              {" "}
              Log Out{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;