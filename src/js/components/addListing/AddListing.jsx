import React from "react";
import {Link} from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';



import {
    addListing,
    addListingBtn,
    addListingCache,
    toggleDropdown,
    radioSale,
    updateProductName,
    updateDescription,
    updatePrice,
    updateCondition,
    updatePost
} from "./addListingActions"

class AddListing extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeAddListing = this.handleChangeAddListing.bind(this);
        this.handleAddListingBtn = this.handleAddListingBtn.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.handleProductNameInput = this.handleProductNameInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handlePriceInput = this.handlePriceInput.bind(this);
        this.handleUrlInput = this.handleUrlInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
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
      const {value } = event.target;
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




    handlePost() {
      const { dispatch, productname, description,  price, url } = this.props;
      let obj = {
        description: description
      };
      dispatch(updatePost(userId, obj));

    }

    // handleAddExpense() {
    //   const { description, amount, dispatch } = this.props;
    //   dispatch(addExpense(description, amount));
    // }


    render() {

        return (
            <div>

                <h1>Hello AddListing {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeAddListing}/>
                <button type="button" onClick={this.handleAddListingBtn}>Change</button>
                <Link to="/"><button type="button">Login</button></Link>

<center>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Add New Listings</h1>
        </div>
      </div>

      <div className="VaddListingsInfo">

      <div className="form-group">
      <label htmlFor="formGroupExampleInput">Name of Product</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." onChange={ this.handleProductNameInput }/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Description</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." onChange={ this.handleDescriptionInput }/>
    </div>

    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Price</label>
      <input type="text" size="4" className="form-control" id="formGroupExampleInput" placeholder="$0.00" onChange={ this.handlePriceInput} />
    </div>
      <ButtonDropdown isOpen={this.props.dropdownOpen} toggle={this.handleToggle}>
      <DropdownToggle caret size="md">
        {this.props.condition ? this.props.condition : 'Condition' }
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="fair" onClick={this.handleSelect}>Fair</DropdownItem>
        <DropdownItem value="good" onClick={this.handleSelect}>Good</DropdownItem>
        <DropdownItem value="excellent" onClick={this.handleSelect}>Excellent</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>




      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1" >Electronics</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
        <label className="form-check-label" htmlFor="inlineCheckbox2">Clothing</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
        <label className="form-check-label" htmlFor="inlineCheckbox3">Art</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
        <label className="form-check-label" htmlFor="inlineCheckbox4">Sports</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
        <label className="form-check-label" htmlFor="inlineCheckbox5">Tools</label>
      </div>

      < br/> <br />

      <Button color="secondary" id="VregPrice" onClick={() => this.onRadioBtnClick(1)} active={this.props.rSelected === 1}>Regular Price</Button>
      <Button color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.props.rSelected === 2}>Sale Price</Button>


      < br/><br />

      <div className="input-group input-group-lg">
      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="URL Image" onChange={ this.handleUrlInput} />
    </div>
      <br />
      <button
              type='button'
              className='btn btn-danger col-12 mb-5'
              onClick={ this.handlePost }
            >Testing
            </button>
      <Link to="/Seller" className="btn btn-primary">Post</Link>

</div>
</center>


            </div>
        )
    }
}

export default AddListing;