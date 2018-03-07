import { connect } from "react-redux";
import Catbar from "./Catbar";

function mapStoreToProps(store) {
    return { 
        input: store.catbar.input
    };
}

export default connect(mapStoreToProps)(Catbar);