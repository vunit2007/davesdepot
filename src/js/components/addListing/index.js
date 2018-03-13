import { connect } from "react-redux";
import AddListing from "./AddListing";

function mapStoreToProps(store) {
    return {
        input: store.addListing.input,
        dropdownOpen: store.addListing.dropdownOpen,
        dropdownOpenTwo: store.addListing.dropdownOpenTwo,
        dropdownOpenThree: store.addListing.dropdownOpenThree,
        rSelected: store.addListing.rSelected,
        productname: store.addListing.productname,
        description: store.addListing.description,
        price: store.addListing.price,
        user: store.login.user,
        url: store.addListing.url,
        condition: store.addListing.condition,
        categories: store.addListing.categories,
        specials: store.addListing.specials,
        posted: store.addListing.posted,
        postedItem: store.addListing.postedItem
    }
}

export default connect(mapStoreToProps)(AddListing);