import { connect } from "react-redux";
import Signup from "./Signup";

function mapStoreToProps(store) {
    return {
        input: store.signup.input
    }
}

export default connect(mapStoreToProps)(Signup);