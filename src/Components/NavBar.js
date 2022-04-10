import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export class NavBar extends Component {
  render() {
    return <nav>
        <NavLink className={(navData)=>navData.isActive?"nav-active-link":""} to="/">Home</NavLink>
        <NavLink className={(navData)=>navData.isActive?"nav-active-link":""} to="/about">About</NavLink>
    </nav>;
  }
}

export default NavBar;
