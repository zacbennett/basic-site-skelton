import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div id="app">
      <Router>
        <div className="navigation">
         
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
        </div>
        <div className="main">
          <Switch>
              <Route path="/about">
                <h1>ABOUT PAGE</h1>
                sdgjsglksjagls
              </Route>
              <Route path="/">
                <h1>HOME PAGE</h1>
              </Route>
            </Switch>
        </div>
        <div className="footer">Footer</div>
      </Router>
    </div>
  );
}

export default App;
