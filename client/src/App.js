import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" render={(props) => <Home/>}/>
          <Route exact path="/login" render={(props) => <Login/>}/>
          <Route exact path="/signup" render={(props) => <Register/>}/>
        </Switch>
    </div>
  );
}

export default App;
