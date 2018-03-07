import { connect } from "react-redux";
import Listings from "./Listings";

function mapStoreToProps(store) {
    return {
        input: store.listings.input
    }
}

export default connect(mapStoreToProps)(Listings);