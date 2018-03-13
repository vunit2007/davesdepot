import { connect } from "react-redux";
import Login from "./Login";

function mapStoreToProps(store) {
    return {
        username:store.login.username,
        password:store.login.password,
        name: store.login.name,
        phoneNumber: store.login.phoneNumber,
        address: store.login.address,
        email: store.login.email,
        redirect:store.login.redirect,
        error:store.login.error,
        userType:store.login.userType,
        loginSignUpBoolean: store.login.loginSignUpBoolean,
        completeFirstAxios: store.login.completeFirstAxios,
        user: store.login.user
    }
}

export default connect(mapStoreToProps)(Login);

