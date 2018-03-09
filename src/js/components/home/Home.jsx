import React from "react";
import {Link} from "react-router-dom";

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

    handleChange(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(home(input));
    }

    handleHomeBtn(e){
        const {dispatch} = this.props;
        dispatch(homeBtn());
    }

    render() {

        return (
            <div>
                <h1>Hello Home {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleHomeBtn}>Change</button>
                <Link to="/listings/electronics"><button type="button">Electronics</button></Link>
                <Link to="/listings/tools"><button type="button">tools</button></Link>
                <Link to="/listings/art"><button type="button">art</button></Link>
            </div>
        )
    }
}

export default Home;