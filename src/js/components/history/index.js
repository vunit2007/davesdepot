import { connect } from "react-redux";
import History from "./History";

function mapStoreToProps(store) {
    return {
        orders: store.history.orders,
        status: store.history.status,
        userSignUp: store.signup.user,
        userLogin: store.login.user,
        email: store.login.email
    };
}

export default connect(mapStoreToProps)(History);