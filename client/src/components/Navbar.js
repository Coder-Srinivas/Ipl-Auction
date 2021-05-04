import Bars from './Bars';
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button';
import { UserContext } from '../hooks/UserContext';

const { logout } = require('../services/auth.service');

const Navbar = () => {

    const [barState, setBarState] = useState(false);
    const { user, setUser } = useContext(UserContext);
    let history = useHistory();

    const handleClick = async () => {
        if(!user){
            history.push('/login');
            return;
        }

        await logout();
        setUser(null);
    }
    return(
        <header className="nav-container">
            <img className="nav-container-logo" src="logo.png" alt="Logo"></img>
            <nav className={barState ? "nav-container-main activate" : "nav-container-main deactivate"}>
                <Link to="/" className="nav-container-main-content">Home</Link>
                <Link to="/about" className="nav-container-main-content">About</Link>
                <Link to="/rules" className="nav-container-main-content">Rules</Link>
            </nav>

            <Button txt={user ? "Logout" : "Login"} handleClick={handleClick} />

            <div className="bar-container">
                <Bars barState={barState} setBarState={setBarState}/>
            </div>
            
        </header>
    )
}

export default Navbar
