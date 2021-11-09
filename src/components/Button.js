// import "../App.css";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SwitchButton = () => {
  const {theme, dispatch} = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const changeTheme = () => {
    darkMode ?
      dispatch({ type: "LIGHTMODE" })
    :
      dispatch({ type: "DARKMODE" })
  }

  return (
    <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={changeTheme} style={{marginLeft: 'auto'}}>
      {darkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  )
}

export default SwitchButton;