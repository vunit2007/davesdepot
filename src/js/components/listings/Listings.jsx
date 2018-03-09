import React from "react";
import {Link} from "react-router-dom";

import {
    listings,
    listingsBtn,
    listingsCache
} from "./listingsActions"

class Listings extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeListings = this.handleChangeListings.bind(this);
        this.handleListingsBtn = this.handleListingsBtn.bind(this);
    }

    handleChangeListings(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(listings(input));
    }

    handleListingsBtn(e){
        const {dispatch} = this.props;
        dispatch(listingsBtn());
    }

   //functionwillmountthing axios.get("/api/listings")
    render() {
        console.log("props: ", this.props.match.params.cat);
        const cat = this.props.match.params.cat;


        return (
            <div>
                <h1>Hello Listings {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeListings}/>
                <button type="button" onClick={this.handleListingsBtn}>Change</button>
                <Link to="/"><button type="button">Login</button></Link>
<center>
 <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Category Title</h1>
  </div>
</div>

<div className="VfirstRow">
<div className="Vitem1">
<p>Rainbow Seeds Abstract Gold Canvas Art by Lisa Audit</p>
<a href=""><img src="https://i5.walmartimages.com/asr/bba3e620-36c9-415c-b0a2-8f699168101c_1.d29d6993dd1a0925e1bafd4c274b3812.jpeg" height="200px"/></a>
<p>$47.99</p>
</div>
<div className="Vitem2">
<p>Rainbow Seeds Abstract Gold Canvas Art by Lisa Audit</p>
<a href=""><img src="https://i5.walmartimages.com/asr/bba3e620-36c9-415c-b0a2-8f699168101c_1.d29d6993dd1a0925e1bafd4c274b3812.jpeg" height="200px"/></a>
<p>$47.99</p>
</div>
</div>

<div className="VsecondRow">
<div className="Vitem3">
<p>Rainbow Seeds Abstract Gold Canvas Art by Lisa Audit</p>
    <a href=""><img src="https://i5.walmartimages.com/asr/bba3e620-36c9-415c-b0a2-8f699168101c_1.d29d6993dd1a0925e1bafd4c274b3812.jpeg" height="200px"/></a>
    <p>$47.99</p>
</div>
<div className="Vitem4">
<p>Rainbow Seeds Abstract Gold Canvas Art by Lisa Audit</p>
<a href=""><img src="https://i5.walmartimages.com/asr/bba3e620-36c9-415c-b0a2-8f699168101c_1.d29d6993dd1a0925e1bafd4c274b3812.jpeg" height="200px"/></a>
<p>$47.99</p>
</div>
</div>

</center>



            </div>
        )
    }
}

export default Listings;