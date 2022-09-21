import Bars from "./Bars";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";
import Loader from "./Loading.component";
import { logout } from "../services/auth.service";

const Navbar = () => {
  const [barState, setBarState] = useState(false);
  const { user, setUser, loading } = useContext(UserContext);
  let history = useHistory();

  const handleClick = async () => {
    if (!user) {
      history.push("/login");
      return;
    }

    await logout();
    setUser(null);
  };
  return (
    <header className="nav-container">
      <img
        className="nav-container-logo"
        src="/Images/logo.png"
        alt="Logo"
      ></img>
      <nav
        className={
          barState
            ? "nav-container-main activate"
            : "nav-container-main deactivate"
        }
      >
        <Link to="/" className="nav-container-main-content">
          Home
        </Link>
        <Link to="/auction" className="nav-container-main-content">
          Auction
        </Link>
        <Link to="/auctions/played" className="nav-container-main-content">
          Previous
        </Link>
      </nav>

      <div className={barState ? "activate" : "deactivate"}>
        {!loading ? (
          <button className="button" onClick={() => handleClick()}>
            {user ? "Logout" : "Login"}
          </button>
        ) : (
          <Loader size="2" />
        )}
      </div>

      <div className="bar-container">
        <Bars barState={barState} setBarState={setBarState} />
      </div>
    </header>
  );
};

export default Navbar;
