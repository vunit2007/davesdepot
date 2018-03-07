import { connect } from "react-redux";
import Cart from "./Cart";

function mapStoreToProps(store) {
    return {
        input: store.cart.input
    }
}

export default connect(mapStoreToProps)(Cart);