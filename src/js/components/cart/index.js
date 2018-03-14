import { connect } from "react-redux";
import Cart from "./Cart";

function mapStoreToProps(store) {
    return {
        cart: store.cart.cart,
        listings: store.home.listings
    }
}

export default connect(mapStoreToProps)(Cart);