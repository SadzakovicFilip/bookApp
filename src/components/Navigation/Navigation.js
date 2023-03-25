import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navigation.css"

function Navigation() {
    const styles = ({ isActive }) => {
    return { className: isActive ? `active` : `notActive` };
  };
  return (
    <nav className='navigation'>
        <NavLink className={{styles}} to="/">OverAll</NavLink>
        <NavLink className={{styles}} to="/jan">January</NavLink>
        <NavLink className={{styles}} to="/feb">February</NavLink>
        <NavLink className={{styles}} to="/mar">March</NavLink>
        <NavLink className={{styles}} to="/apr">April</NavLink>
        <NavLink className={{styles}} to="/may">May</NavLink>
        <NavLink className={{styles}} to="/jun">Jun</NavLink>
        <NavLink className={{styles}} to="/jul">July</NavLink>
        <NavLink className={{styles}} to="/aug">August</NavLink>
        <NavLink className={{styles}} to="/sep">September</NavLink>
        <NavLink className={{styles}} to="/oct">October</NavLink>
        <NavLink className={{styles}} to="/nov">November</NavLink>
        <NavLink className={{styles}} to="/dec">December</NavLink>
    </nav>
  )
}

export default Navigation