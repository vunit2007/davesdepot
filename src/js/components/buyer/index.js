import { connect } from "react-redux";
import Buyer from "./Buyer";

function mapStoreToProps(store) {
    return {
        input: store.buyer.input
    }
}

export default connect(mapStoreToProps)(Buyer);