import React from "react";
import { Link } from "react-router-dom";
import { Button, Jumbotron } from 'reactstrap';

import {
    home,
    homeBtn,
    homeCache
} from "./homeActions"

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleHomeBtn = this.handleHomeBtn.bind(this);
    }

    handleChange(e) {
        let input = e.target.value;
        const { dispatch } = this.props;
        dispatch(home(input));
    }

    handleHomeBtn(e) {
        const { dispatch } = this.props;
        dispatch(homeBtn());
    }

    render() {

        return (
            <div>

                <div className="Eresponsive">
                    <div className="Egallery">
                        <a target="_blank" href="">
                            <img className='EhomeImg' src="https://i5.walmartimages.com/asr/5c836168-67b7-4720-ab07-e327f16e1d90_1.75f0f4cd0831a745c9cb747ad4037eed.jpeg"   height="300" />
                        </a>
                        <div className="EimgDesc">Hanes Fleece Pullover Hoodie</div>
                    </div>
                </div>


                <div className="Eresponsive">
                    <div className="Egallery">
                        <a target="_blank" href="">
                            <img className='EhomeImg' src="https://i5.walmartimages.com/asr/be006acc-aeb1-4487-97fb-4ed1a730bcc8_1.7a47ef7afb7c8ffbca6b009b35eb7260.jpeg" height="300" />
                        </a>
                        <div className="EimgDesc">26 Inches Ladies Schwinn Sidewinder</div>
                    </div>
                </div>

                <div className="Eresponsive">
                    <div className="Egallery">
                        <a target="_blank" href="">
                            <img className='EhomeImg' src="https://i5.walmartimages.com/asr/dae32fde-2e0f-498d-82f5-67e87357f9cc_1.2756eb3160afa18df70400918951d62d.jpeg" height="300" />
                        </a>
                        <div className="EimgDesc">Hyper Tough 2.4Amp Random Orbit Sander</div>
                    </div>
                </div>

                <div className="Eresponsive">
                    <div className="Egallery">
                        <a target="_blank" href="">
                            <img className='EhomeImg' src="https://i5.walmartimages.com/asr/4c93d075-4a8d-44c0-8e35-39700b844383_1.b1b1146a07931000c89e7508ceb6d80f.jpeg" height="400" />
                        </a>
                        <div className="EimgDesc">6-in-1 Victrola Entertainment Center</div>
                    </div>
                </div>







            </div>

        )
    }
}

export default Home;