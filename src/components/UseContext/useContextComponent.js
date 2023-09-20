import React from "react";
import { useTheme, useThemeUpdate } from "./useContext";

const UseContextComponent = (props) => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle ThemeContext</button>
      <div style={themeStyle}>Function theme</div>
    </div>
  );
};

export default UseContextComponent;
