import { connect } from "react-redux";
import Listings from "./Listings";

function mapStoreToProps(store) {
    return {
        listings: store.listings.listings,
        category: store.listings.category
    }
}

export default connect(mapStoreToProps)(Listings);