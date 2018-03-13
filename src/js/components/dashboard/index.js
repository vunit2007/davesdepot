import { connect } from "react-redux";
import Dashboard from "./Dashboard";

function mapStoreToProps(store) {
    return {
        user: store.login.user
    }
}

export default connect(mapStoreToProps)(Dashboard);