import { connect } from "react-redux";
import Navbar from "./Navbar";

function mapStoreToProps(store) {
    return {
        input: store.navbar.input,
        user: store.login.user
    }
}

export default connect(mapStoreToProps)(Navbar);