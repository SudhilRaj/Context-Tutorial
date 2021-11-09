import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import SwitchButton from './Button';

const Nav = () => {
    const {theme} = useContext(ThemeContext);
    const darkMode = theme.darkMode;

    return ( 
        <div className={`nav ${darkMode ? "bg-light" : "bg-dark"}`}>
            <ul>
                <li><Link to="/" className={`${darkMode ? "para-light" : "para-dark"}`}>Home</Link></li>
                <li><Link to="/context" className={`${darkMode ? "para-light" : "para-dark"}`}>Todos Context</Link></li>
            </ul>
            <style jsx="true">
            {`
            .nav {
                display: flex;
                flex: 1;
                align-items: center;
                height: 50px;
            }
            
            .nav ul  {
                list-style: none;
            }

            .nav ul li {
                display: inline-block;
                margin-right: 20px;
                cursor:pointer;
            }
        `}
        </style>
        <SwitchButton/>
        </div>
     );
}
 
export default Nav;