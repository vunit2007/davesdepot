import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import {
    categoryUpdate,
    updateListing,
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

    // handleListingsItem (e) {
    //     const {dispatch} = this.props;
    //     dispatch(updateListing())
    // }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(updateListing())
      }

   //functionwillmountthing axios.get("/api/listings")
    render() {
        // console.log("props: ", this.props.match.params.cat);
        // const cat = this.props.match.params.cat;
        let catlist = [];
        this.props.listings.length > 0 &&
        this.props.listings.map(listing => {
            console.log(listing)
            if(listing.categoryId == this.props.category) {
                catlist.push(listing)
            };
        })
        console.log("Tacos", this.props.listings > 0)
        console.log('DaTa', catlist)

        return (
            <div>
                <h1>Hello Listings {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeListings}/>
                <button type="button" onClick={this.handleListingsBtn}>Change</button>
                <Link to="/"><button type="button">Login</button></Link>
<center>
 <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4" id="VcatTitle">{this.props.category}</h1>
  </div>
</div>
        {catlist.length > 0 &&
        catlist.map(catitem => {
return(

            <div key={catitem.id} className="Vitem1">
                <div className="Vinfo">
            <p>{catitem.name}</p>
            <div className="Vimage"><a href=""><img src={catitem.images[0]} height="200px" width="200px"/></a></div>
            <p>${catitem.price}</p>
            </div>
            </div>
)
        })
        }


</center>



            </div>
        )
    }
}

export default Listings;