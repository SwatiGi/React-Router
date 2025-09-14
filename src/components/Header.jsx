import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Header.module.css"
const Header = () => {
  return (
    <nav className={classes.nav}>
     
       
        
      <NavLink  className={({ isActive }) => 
          isActive ? `${classes.link} ${classes.active}` : classes.link
        } to='/' >Home</NavLink>
      <NavLink  className={({ isActive }) => 
          isActive ? `${classes.link} ${classes.active}` : classes.link
        }to='/welcome' >Welcome</NavLink>
      <NavLink  className={({ isActive }) => 
          isActive ? `${classes.link} ${classes.active}` : classes.link
        } to='/products' >Products</NavLink>
      
       
      
      </nav>
  )
}

export default Header