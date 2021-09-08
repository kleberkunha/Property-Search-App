import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Blog
      </NavLink>
      <NavLink exact to="/profile" activeClassName="nav-active">
       Profile
      </NavLink>
    </div>
  );
};

export default Navbar;