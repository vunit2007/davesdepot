import { connect } from "react-redux";
import AddListing from "./AddListing";

function mapStoreToProps(store) {
    return {
        input: store.addListing.input
    }
}

export default connect(mapStoreToProps)(AddListing);