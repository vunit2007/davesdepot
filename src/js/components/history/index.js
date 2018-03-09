import { connect } from "react-redux";
import History from "./History";

function mapStoreToProps(store) {
    return {
        orders: store.history.orders,
        status: store.history.status,
        user: store.login.user
    };
}

export default connect(mapStoreToProps)(History);