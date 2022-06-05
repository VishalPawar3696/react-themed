import React,{useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import Body from './Body';
const Navbar = () => {
    const {isLight,toggleTheme}=useContext(ThemeContext);
  return (
      <>
    <div>Navbar
    </div>
    <button onClick={toggleTheme}>{`Swwitch to ${isLight? "Dark Mode":"Light Mode"}`}</button>
{/* <Body/> */}

    </>
  )
}

export default Navbar;