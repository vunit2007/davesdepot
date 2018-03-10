import { connect } from "react-redux";
import Login from "./Login";

function mapStoreToProps(store) {
    return {
        username:store.login.username,
        password:store.login.password,
        redirect:store.login.redirect,
        error:store.login.error,
        userType:store.login.userType
    }
}

export default connect(mapStoreToProps)(Login);

