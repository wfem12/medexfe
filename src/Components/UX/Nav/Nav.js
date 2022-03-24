import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";
const Nav = ()=>{
    const {_id, role} = useSelector((state)=>state.security);
    const currentLocation = useLocation();
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'
                    className={currentLocation.pathname === '/'?'active':''}
                    >
                    Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/Login'
                    className={currentLocation.pathname === '/Login'?'active':''}
                    >
                    Login
                    </NavLink>
                    </li>

                <li>
                    <NavLink to='/Signin'
                    className={currentLocation.pathname === '/Signin'?'active':''}
                    >
                    Signin
                    </NavLink>
                    </li>
            </ul>
        </nav>
    );
}

export default Nav;