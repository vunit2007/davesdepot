import { connect } from "react-redux";
import Login from "./Login";

function mapStoreToProps(store) {
    return {
        input: store.login.input
    }
}

export default connect(mapStoreToProps)(Login);