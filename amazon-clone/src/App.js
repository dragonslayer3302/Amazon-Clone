import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout'
import Payment from './Payment'
import {BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51JBN4pSF9tR2fOGq27rrLd1NO53cCttkz8lYM70k3mUUR44TOWMVMvULEG7EGVSP5qHcQdpzu9x9CKC48UN9cZew00t2HFoNVD'
  );

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } 
      else {
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM Naming Convention
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
               <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
