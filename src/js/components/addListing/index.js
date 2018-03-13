import { connect } from "react-redux";
import AddListing from "./AddListing";

function mapStoreToProps(store) {
    return {
        input: store.addListing.input,
        dropdownOpen: store.addListing.dropdownOpen,
        rSelected: store.addListing.rSelected,
        productname: store.addListing.productname,
        description: store.addListing.description,
        price: store.addListing.price,
        userId: store.login.user.id,
        url: store.addListing.url,
        condition: store.addListing.condition
    }
}

export default connect(mapStoreToProps)(AddListing);