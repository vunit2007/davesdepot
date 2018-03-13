import React from "react";
import {Link} from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';



import {
    addListing,
    addListingBtn,
    addListingCache,
    toggleDropdown,
    toggleDropdownTwo,
    toggleDropdownThree,
    radioSale,
    updateProductName,
    updateDescription,
    updatePrice,
    updateCondition,
    updateCategories,
    updateSpecials,
    updateUrl,
    updatePostedTrue,
    updatePostedFalse,
    updatePost
} from "./addListingActions"

class AddListing extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeAddListing = this.handleChangeAddListing.bind(this);
        this.handleAddListingBtn = this.handleAddListingBtn.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleTwo = this.handleToggleTwo.bind(this);
        this.handleToggleThree = this.handleToggleThree.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.handleProductNameInput = this.handleProductNameInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handlePriceInput = this.handlePriceInput.bind(this);
        this.handleUrlInput = this.handleUrlInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleSpecials = this.handleSpecials.bind(this);
        this.handlePostedFalse = this.handlePostedFalse.bind(this);
        this.handlePostedTrue = this.handlePostedTrue.bind(this);



    }

    handleChangeAddListing(e){
        const {dispatch} = this.props;
        let input = e.target.value;
        dispatch(addListing(input));
    }

    handleAddListingBtn(e){
        const {dispatch} = this.props;
        dispatch(addListingBtn());
    }

    handleToggle(e) {
        const { dispatch } = this.props;
        dispatch(toggleDropdown());
    }

    handleToggleTwo(e) {
      const { dispatch } = this.props;
      dispatch(toggleDropdownTwo());
  }

  handleToggleThree(e) {
    const { dispatch } = this.props;
    dispatch(toggleDropdownThree());
  }

    onRadioBtnClick (e) {
        const { dispatch } = this.props;
        dispatch(radioSale())
    }

    handleProductNameInput(event) {
      // dispatch was provided by connect()
      const { dispatch } = this.props;
      const { value } = event.target;
      dispatch(updateProductName(value));
    }

    handleDescriptionInput(event) {
      const { dispatch } = this.props;
      const { value } = event.target;
      dispatch(updateDescription(value))
    }

    handlePriceInput(event) {
      const {dispatch} = this.props;
      let {value } = event.target;
      value -= 0;
      dispatch(updatePrice(value))
    }

    handleUrlInput(event) {
      const {dispatch} = this.props;
      const {value} = event.target;
      dispatch(updateUrl(value))
    }


    handleSelect(event) {
      // this.setState({
      //   dropdownOpen: !this.state.dropdownOpen,
      //   condition: event.target.value
      // });
      const {dispatch} = this.props;
      const {value} = event.target;
      dispatch(updateCondition(value))
    }

    handleCategories(event) {
    const {dispatch} = this.props;
    const {value} = event.target;
    dispatch(updateCategories(value))
    }

    handleSpecials(event) {

    const {dispatch} = this.props;
    let {value} = event.target;
    if (value === "Regular Price"){
      value = false
    } else { value = true }
    dispatch(updateSpecials(value))
    // const {value} = event.target;  if (event.target.name === 'value') {
    // dispatch(updateSpecials(value))
    // return
    // dispatch(updateSpecials(value))

  }

  handlePostedTrue () {
    const {dispatch} = this.props;
    dispatch(updatePostedTrue())
  }

  handlePostedFalse () {
    const {dispatch} = this.props;
    dispatch(updatePostedFalse())
  }

    handlePost() {
      const { dispatch, user, productname, description,  price, condition, categories, specials, url } = this.props;
        // if (specials === 'Regular Price')
        //     return false;
        // else
        //     return true;
      //if special = "regular price" return false if special = "sale price" return true
      let obj = {
       name: productname,
       description: description,
       price: price,
       condition: condition,
       sale: specials,
       images: [url],
       categoryId: categories

      };
      console.log("hey girl", user)
      dispatch(updatePost(user, obj));

    }

    // handleAddExpense() {
    //   const { description, amount, dispatch } = this.props;
    //   dispatch(addExpense(description, amount));
    // }


    render() {
console.log("tacos", this.props.posted)
      if (this.props.posted) {
        return (
          <div className="Vposted">

            <img src="http://clipart-library.com/images/kT8okoaxc.jpg" height="200px" /><br/><br/>
            <h1> Your {this.props.postedItem.name} has been posted for ${this.props.postedItem.price}.
            </h1>
            <button className="btn btn-primary" onClick={this.handlePostedFalse}>Add New Posting</button>
            </div>
        )
      }

        return (
            <div>

                <h1>Hello AddListing {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeAddListing}/>
                <button type="button" onClick={this.handleAddListingBtn}>Change</button>
                <Link to="/"><button type="button">Login</button></Link>

<center>
      <div className="jumbotron jumbotron-fluid alert-primary" id='VaddListingJumbo'>
        <div className="container">
          <h1 className="display-4">Add New Listings</h1>
        </div>
      </div>

      <div className="VaddListingsInfo">

      <div className="form-group">
      <label htmlFor="formGroupExampleInput">Name of Product</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" onChange={ this.handleProductNameInput }/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Description</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" onChange={ this.handleDescriptionInput }/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Price</label><br/>
      <div>$<input type="number" size="8" placeholder="0.00" onChange={ this.handlePriceInput} /></div>
    </div>
    <div className="VdropDown">
    <div className="VdropDownOne">
      <ButtonDropdown isOpen={this.props.dropdownOpen} toggle={this.handleToggle}>
      <DropdownToggle caret size="md">
      {this.props.condition ? this.props.condition.charAt(0).toUpperCase() + this.props.condition.slice(1) : 'Conditions'}
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem header>CONDITIONS</DropdownItem>
        <DropdownItem value="fair" onClick={this.handleSelect}>Fair</DropdownItem>
        <DropdownItem value="good" onClick={this.handleSelect}>Good</DropdownItem>
        <DropdownItem value="excellent" onClick={this.handleSelect}>Excellent</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>
<div className="VdropDownTwo">
      <ButtonDropdown isOpen={this.props.dropdownOpenTwo} toggle={this.handleToggleTwo}>
      <DropdownToggle caret size="md">
        {this.props.categories ? this.props.categories.charAt(0).toUpperCase() + this.props.categories.slice(1) : 'Categories'}
      </DropdownToggle>
      <DropdownMenu>
       <DropdownItem header>CATEGORIES</DropdownItem>
        <DropdownItem value="electronics" onClick={this.handleCategories}>Electronics</DropdownItem>
        <DropdownItem value="clothing" onClick={this.handleCategories}>Clothing</DropdownItem>
        <DropdownItem value="art" onClick={this.handleCategories}>Art</DropdownItem>
        <DropdownItem value="sports" onClick={this.handleCategories}>Sports</DropdownItem>
        <DropdownItem value="tools" onClick={this.handleCategories}>Tools</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>
<div className="VdropDownThree">
      <ButtonDropdown isOpen={this.props.dropdownOpenThree} toggle={this.handleToggleThree}>
      <DropdownToggle caret size="md">
        {this.props.specials ? 'Sale Price' : 'Regular Price' }
      </DropdownToggle>
      <DropdownMenu>
       <DropdownItem header>SPECIALS</DropdownItem>
        <DropdownItem value="Regular Price" name="Regular Price" onClick={this.handleSpecials}>Regular Price</DropdownItem>
        <DropdownItem value="Sale Price" name="Sale Price" onClick={this.handleSpecials}>Sale Price</DropdownItem>

      </DropdownMenu>
    </ButtonDropdown>
</div>
</div>

{/*
      <Button color="secondary" id="VregPrice" onClick={() => this.onRadioBtnClick(1)} active={this.props.rSelected === 1}>Regular Price</Button>
      <Button color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.props.rSelected === 2}>Sale Price</Button> */}

     {/* Erik's Code w/ ID's
       <Button color="secondary" id="VregPrice" onClick={() => this.onRadioBtnClick(1)} active={this.props.rSelected === 1}>Regular Price</Button>
      <Button color="secondary" id='VsalePrice' onClick={() => this.onRadioBtnClick(2)} active={this.props.rSelected === 2}>Sale Price</Button> */}


      < br/><br />

      <div className="input-group input-group-lg">
      <input type="text" className="form-control" id='formGroupExampleInput' aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="URL Image" onChange={ this.handleUrlInput} />
    </div>
      <br />

      <button className="btn btn-primary" onClick={this.handlePost}>Post</button><br/><br/>
 {/*   Erik's code
    <button
              type='button'
              className='btn btn-danger col-12 mb-5' id='VtestingBtn'
              onClick={ this.handlePost }
            >Testing
            </button>
      <Link to="/Seller" className="btn btn-primary" id='VaddListingBtn'>Post</Link> */}

</div>
</center>


            </div>
        )
    }
}

export default AddListing;