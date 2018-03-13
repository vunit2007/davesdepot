import { connect } from "react-redux";
import Details from "./Details";

function mapStoreToProps(store) {
    return {
        listings: store.home.listings,
        index: store.details.index
    }
}

export default connect(mapStoreToProps)(Details);