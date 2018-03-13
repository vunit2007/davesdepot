import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Catbar from "./components/catbar";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Listings from "./components/listings";
import Details from "./components/details";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import AddListing from "./components/addListing";
import Thanks from "./components/thanks";
import { Button, Jumbotron } from 'reactstrap';


export default class App extends React.Component {
  render() {
    return (
      <div>

        <Router >
          <div>
            <Route component={Navbar}/>
            <Route exact path="/" component={Catbar} />
            <Route path="/listings" component={Catbar} />
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/listings" component={Listings} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/addlisting" component={AddListing} />
            <Route path="/thanks" component={Thanks} />
          </div>
        </Router>
      </div>
    );
  }
}
