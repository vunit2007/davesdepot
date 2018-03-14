import React from "react";
import {Link} from "react-router-dom";

import {
    catbar,
} from "./catbarActions";

import {
    categoryUpdate, 
    listingRedirectFalse,
} from "../listings/listingsActions";

class Catbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this);
    }

    handleCategoryUpdate(e){
        const { dispatch } = this.props;
        const { category } = e.target.dataset;
        dispatch(categoryUpdate(category));
        dispatch(listingRedirectFalse());

    }
    
    render() {

        return (
            <nav className = 'EcatBar' id='EcatBar'>
     
                <ul  className ='EcatUl' id = 'EcatUl'>
                    <li className='EcatList' id='EcatList'>  <Link to="/listings" className='EcatButton' id='EcatButton' onClick={this.handleCategoryUpdate} data-category={undefined}  > Show All   </Link></li> 
                    <li className='EcatList' id='EcatList'>  <Link to="/listings" className='EcatButton' id='EcatButton' onClick={this.handleCategoryUpdate} data-category="electronics"> Electronics</Link></li> 
                    <li className='EcatList' id='EcatList'>  <Link to="/listings" className='EcatButton' id='EcatButton' onClick={this.handleCategoryUpdate} data-category="clothing"   > Clothing   </Link></li> 
                    <li className='EcatList' id='EcatList'>  <Link to="/listings" className='EcatButton' id='EcatButton' onClick={this.handleCategoryUpdate} data-category="art"        > Art        </Link></li> 
                    <li className='EcatList' id='EcatList'>  <Link to="/listings" className='EcatButton' id='EcatButton' onClick={this.handleCategoryUpdate} data-category="sports"     > Sports     </Link></li> 
                    <li className='EcatList' id='EcatList'>  <Link to="/listings" className='EcatButton' id='EcatButton' onClick={this.handleCategoryUpdate} data-category="tools"      > Tools      </Link></li> 
                </ul>
      
        </nav>
        )
    }
}

export default Catbar;