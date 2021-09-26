import { Switch, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Auction from "./pages/Auction";
import About from "./pages/About";
import PreviousAuctions from "./pages/PreviousAuctions";

// Custom Hooks
import { UserContext } from "./hooks/UserContext";
import useFindUser from "./hooks/useFindUser";

// Custom Routes
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  const [user, setUser, loading] = useFindUser();

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <div className="App">
        <Navbar />
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/signup" component={SignUp} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <PrivateRoute exact path="/auction" component={Auction} />
          <PrivateRoute
            exact
            path="/auctions/played"
            component={PreviousAuctions}
          />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
