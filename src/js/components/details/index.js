import { connect } from "react-redux";
import Details from "./Details";

function mapStoreToProps(store) {
    return {
        input: store.details.input
    }
}

export default connect(mapStoreToProps)(Details);