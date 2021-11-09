import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/context">Context</Link></li>
            </ul>
            <style jsx="true">
            {`
            .nav {
                display: flex;
                flex: 1;
                align-items: center;
                background-color: blanchedalmond;
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
        </div>
     );
}
 
export default Nav;