import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./Store/StateProvider";

function App() {
  const [ dispatch] = useStateValue();
  React.useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
