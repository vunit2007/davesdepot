import { connect } from "react-redux";
import Signup from "./Signup";

function mapStoreToProps(store) {
    return {
    name: store.signup.name,
    email: store.signup.email,
    password: store.signup.password,
    phoneNumber: store.signup.phoneNumber,
    address:store.signup.address,
    username:store.signup.username,
    userType: store.signup.userType,
    activeUser: store.login.activeUser,
    activeCustomer: store.login.activeCustomer,
    redirect: store.signup.redirect,
    error:store.signup.error,
    };
}

export default connect(mapStoreToProps)(Signup);
