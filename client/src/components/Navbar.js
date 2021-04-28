import Bars from './Bars';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [barState, setBarState] = useState(false);

    return(
        <header className="nav-container">
            <img className="nav-container-logo" src="logo.png" alt="Logo"></img>
            <nav className={barState ? "nav-container-main activate" : "nav-container-main deactivate"}>
                <Link to="/" className="nav-container-main-content">Home</Link>
                <Link to="/about" className="nav-container-main-content">About</Link>
                <Link to="/rules" className="nav-container-main-content">Rules</Link>
            </nav>

            <div className="bar-container">
                <Bars barState={barState} setBarState={setBarState}/>
            </div>

            <div className="nav-container-login">
                <Link to="/login">Login</Link>
            </div>
            

        </header>
    )
}

export default Navbar
