import { connect } from "react-redux";
import Thanks from "./Thanks";

function mapStoreToProps(store) {
    return {
        input: store.thanks.input
    }
}

export default connect(mapStoreToProps)(Thanks);