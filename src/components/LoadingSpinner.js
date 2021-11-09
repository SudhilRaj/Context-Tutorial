import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const LoadingSpinner = () => {
    const {theme} = useContext(ThemeContext);
    const darkMode = theme.darkMode;

    return ( 
        <div>
            <p className={`${darkMode ? 'para-dark' : 'para-light'}`}>Loading...</p>
        </div>
     );
}
 
export default LoadingSpinner;