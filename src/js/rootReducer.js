import { combineReducers } from 'redux';
import buyerReducer from "./components/buyer/buyerReducer";
import homeReducer from "./components/home/homeReducer";
import sellerReducer from './components/seller/sellerReducer';
import catbarReducer from './components/catbar/catbarReducer';
import navbarReducer from './components/navbar/navbarReducer';
import loginReducer from './components/login/loginReducer';
import signupReducer from "./components/signup/signupReducer";
import listingsReducer from "./components/listings/listingsReducer";
import detailsReducer from "./components/details/detailsReducer";
import cartReducer from "./components/cart/cartReducer";
import checkoutReducer from "./components/checkout/checkoutReducer";
import addListingReducer from "./components/addListing/addListingReducer";
import thanksReducer from "./components/thanks/thanksReducer";
import historyReducer from './components/history/historyReducer';

const rootReducer = combineReducers({
    buyer: buyerReducer,
    seller: sellerReducer,
    history: historyReducer,
    catbar: catbarReducer,
    navbar: navbarReducer,
    home: homeReducer,
    login: loginReducer,
    signup: signupReducer,
    listings: listingsReducer,
    details: detailsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    addListing: addListingReducer,
    thanks: thanksReducer
});

export default rootReducer;
