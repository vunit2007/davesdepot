import { connect } from "react-redux";
import Listings from "./Listings";

function mapStoreToProps(store) {
    return {
        listings: store.listings.listings,
        category: store.listings.category,
        index: store.details.index,
        redirect: store.listings.redirect
    }
}

export default connect(mapStoreToProps)(Listings);