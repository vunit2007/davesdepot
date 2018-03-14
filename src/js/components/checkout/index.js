import { connect } from "react-redux";
import Checkout from "./Checkout";

function mapStoreToProps(store) {
    return {
        cart: store.cart.cart,
        user: store.login.user
    }
}

export default connect(mapStoreToProps)(Checkout);