import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const initialState = { darkMode: false };

    const themeReducer = (state, action) => {
        switch (action.type) {
          case "LIGHTMODE":
            return { darkMode: false };
          case "DARKMODE":
            return { darkMode: true };
          default:
            return state;
        }
      };

    const [state, dispatch] = useReducer(themeReducer, initialState);

    return(
        <ThemeContext.Provider value={{theme:state, dispatch:dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}