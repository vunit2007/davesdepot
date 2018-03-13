import { connect } from "react-redux";
import History from "./History";

function mapStoreToProps(store) {
    return {
        orders: store.history.orders,
        statusPurchase: store.history.statusPurchase,
        statusListings: store.history.statusListings,
        user: store.login.user,
        userType: store.login.userType,
        sellerItems: store.history.sellerItems
    };
}

export default connect(mapStoreToProps)(History);