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
        <div className="header">Header</div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
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
