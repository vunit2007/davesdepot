import { connect } from "react-redux";
import Details from "./Details";

function mapStoreToProps(store) {
    return {
        listings: store.home.listings,
        index: store.details.index,
        quantity: store.details.quantity
    }
}

export default connect(mapStoreToProps)(Details);