import { connect } from "react-redux";
import AddListing from "./AddListing";

function mapStoreToProps(store) {
    return {
        input: store.addListing.input,
        dropdownOpen: store.addListing.dropdownOpen,
        rSelected: store.addListing.rSelected
    }
}

export default connect(mapStoreToProps)(AddListing);