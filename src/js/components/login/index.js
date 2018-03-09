import { connect } from "react-redux";
import Login from "./Login";

function mapStoreToProps(store) {
    return {
        username:store.login.username,
        password:store.login.password
    }
}

export default connect(mapStoreToProps)(Login);

