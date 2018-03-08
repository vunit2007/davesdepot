import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Catbar from "./components/catbar";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Buyer from "./components/buyer";
import Seller from "./components/seller";
import Login from "./components/login";
import Signup from "./components/signup";
import Listings from "./components/listings";
import Details from "./components/details";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import AddListing from "./components/addListing";
import Thanks from "./components/thanks";

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Origin Etsy Application</h1>
            <p className="lead">stuff!</p>
          </div>
        </div>

        <Router >
          <div className="container">
            <Route exact path="/" component={AddListing} />
            <Route path="/login" component={Login} /> 
          </div>
        </Router>

      </div>
    );
  }
}
