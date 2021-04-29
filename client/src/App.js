import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Auction from './pages/Auction';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" render={(props) => <Home/>}/>
          <Route exact path="/login" render={(props) => <Login/>}/>
          <Route exact path="/signup" render={(props) => <Register/>}/>
          <Route exact path="/auction" render={(props) => <Auction {...props}/>}/>
        </Switch>
    </div>
  );
}

export default App;
