import React from "react";
import {Link} from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';



import {
    addListing,
    addListingBtn,
    addListingCache,
    toggleDropdown,
    radioSale
} from "./addListingActions"

class AddListing extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeAddListing = this.handleChangeAddListing.bind(this);
        this.handleAddListingBtn = this.handleAddListingBtn.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
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
        <br />

<div className="VaddListingsInfo">
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Name of Product" />
      </div>
      <br/>
        <div className="form-group">
          {/* <label for="exampleFormControlTextarea1">Description</label> */}
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description of Product" ></textarea>
        </div>
      <br/>



      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
        </div>
        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
      </div>
      <br/>



      <ButtonDropdown isOpen={this.props.dropdownOpen} toggle={this.handleToggle}>
      <DropdownToggle caret size="md">
        Condition
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Fair</DropdownItem>
        <DropdownItem>Good</DropdownItem>
        <DropdownItem>Excellent</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
<br />






       < br />
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        <label className="form-check-label" for="inlineCheckbox1" >Electronics</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
        <label className="form-check-label" for="inlineCheckbox2">Clothing</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
        <label className="form-check-label" for="inlineCheckbox3">Art</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
        <label className="form-check-label" for="inlineCheckbox4">Sports</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
        <label className="form-check-label" for="inlineCheckbox5">Tools</label>
      </div>

      < br/> <br />

      <Button color="secondary" id="VregPrice" onClick={() => this.onRadioBtnClick(1)} active={this.props.rSelected === 1}>Regular Price</Button>
      <Button color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.props.rSelected === 2}>Sale Price</Button>





      < br/><br />

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Upload</span>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile01" />
          <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>
      <br />

      <Link to="/Seller" className="btn btn-primary">Post</Link>

</div>
</center>




            </div>
        )
    }
}

export default AddListing;