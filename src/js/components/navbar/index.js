import { connect } from "react-redux";
import Navbar from "./Navbar";

function mapStoreToProps(store) {
    return {
        input: store.navbar.input
    }
}

export default connect(mapStoreToProps)(Navbar);