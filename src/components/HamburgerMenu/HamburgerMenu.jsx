import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'services/apiManager';

const HamburgerMenu = ({ auth }) => {

  const dispatch = useDispatch();

  const handleLogOut = () => {
    Cookies.remove("token_cookie");
    Cookies.remove("id_cookie");
    dispatch(logoutUser);
    window.location.reload();
  };
  
  const handleMenu = () => {
    document.querySelector('.span1').classList.toggle("clicked");
    document.querySelector('.span2').classList.toggle("clicked");
    document.querySelector('.span3').classList.toggle("clicked");
    document.querySelector('.menu').classList.toggle("clicked");
  }

  return (
    <>
      <div className="hamburger-box" onClick={handleMenu}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
      <div className="menu">
        <NavLink
          exact
          to="/"
          className="menu-link"
          activeClassName="nav-active"
          onClick={handleMenu}
        >
          Accueil
        </NavLink>
        {auth ?
          <>
            <NavLink
              exact
              to="/profile"
              className="menu-link"
              activeClassName="nav-active"
              onClick={handleMenu}
            >
              Profil
            </NavLink>

            <NavLink
              exact
              to="/create-property"
              className="menu-link"
              onClick={handleMenu}
            >
              <i className="fas fa-plus-circle"></i>Ajouter une annonce
            </NavLink>
            <button
              onClick={() => {
                handleMenu()
                handleLogOut()
              }}
              className="btn btn-danger mx-2"
            >
              {" "}
              Log Out{" "}
            </button>
          </>
          :
          <>
            <NavLink
              exact
              to="/register"
              className="menu-link"
              onClick={handleMenu}
            >
              Sign Up
            </NavLink>
            <NavLink
              exact
              to="/login"
              className="menu-link"
              onClick={handleMenu}
            >
              Log In
            </NavLink>
          </>
        }
      </div>
    </>
  );
};

export default HamburgerMenu;