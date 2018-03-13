import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button } from "reactstrap";
import History from "../history";

import {
    setUserType
} from "../login/loginActions";

class Seller extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(this.props.user === null) {
            return (
                <div className="dTopMargin">
                    <h1 className="dTextCenter">Please login to view your profile</h1>
                </div>
            )
        }

        return (
            <div className="dTopMargin">
                {this.props.userType === "seller" &&
                    <div>
                    <h3 className="dTextCenter">Your Listings</h3>
                            <History />
                      </div>  
                }
                <h3 className="dTextCenter">Your Purchase History</h3>
                <History />
            </div>
        )
    }
}

export default Seller;