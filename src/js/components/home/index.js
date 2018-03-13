import { connect } from "react-redux";
import Home from "./Home";

function mapStoreToProps(store) {
    return {
        listings: store.home.listings,
        index: store.details.index,
        redirect: store.home.redirect
    };
}

export default connect(mapStoreToProps)(Home);