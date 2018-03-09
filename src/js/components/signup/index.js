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
    user: store.signup.user,
    activeUser: store.login.activeUser,
    activeCustomer: store.login.activeCustomer,
    error:store.signup.error,
    };
}

export default connect(mapStoreToProps)(Signup);
