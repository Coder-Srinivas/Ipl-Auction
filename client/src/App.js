import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Auction from './pages/Auction';
import About from './pages/About';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" render={(props) => <Home/>}/>
          <Route exact path="/login" render={(props) => <Login/>}/>
          <Route exact path="/signup" render={(props) => <SignUp/>}/>
          <Route exact path="/about" render={(props) => <About/>}/>
          <Route exact path="/auction" render={(props) => <Auction {...props}/>}/>
        </Switch>
    </div>
  );
}

export default App;
