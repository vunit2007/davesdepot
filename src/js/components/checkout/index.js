import { connect } from "react-redux";
import Checkout from "./Checkout";

function mapStoreToProps(store) {
    return {
        input: store.checkout.input
    }
}

export default connect(mapStoreToProps)(Checkout);