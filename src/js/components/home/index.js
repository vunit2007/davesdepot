import { connect } from "react-redux";
import Home from "./Home";

function mapStoreToProps(store) {
    return {
        listings: store.home.listings,
        input: store.home.input
    };
}

export default connect(mapStoreToProps)(Home);