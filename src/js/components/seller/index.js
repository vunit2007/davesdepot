import { connect } from "react-redux";
import Seller from "./Seller";

function mapStoreToProps(store) {
    return {
        input: store.seller.input
    }
}

export default connect(mapStoreToProps)(Seller);