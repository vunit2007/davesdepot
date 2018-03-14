import React from "react";
import {Table, UncontrolledAlert} from "reactstrap";
import { CSSTransitionGroup } from 'react-transition-group'
import { getOrderHistory, getSellerItems } from './historyActions';

import {
    removeFromHistory,
    removeSetNull
} from "./historyActions";

import {
    removeListing
} from "../dashboard/dashboardActions";

export default class History extends React.Component{
    constructor(props){
        super(props);

        this.handleRemoveListing = this.handleRemoveListing.bind(this);
    }
    //When component mounts, go get order history
    componentWillMount() {
        const { dispatch, user } = this.props;
        if(this.props.user !== null && this.props.user.userType === "seller"){
            dispatch(getSellerItems(user));
        } 
        dispatch(getOrderHistory(user));
        dispatch(removeSetNull());
    }

    handleRemoveListing(e){
        const { dispatch } = this.props;
        const { id, index } = e.target.dataset;
        dispatch(removeListing(id));
        dispatch(removeFromHistory(index));
    }

    render(){
        //get orders from props
        const { orders, status, sellerItems, purchaseOrListing, remove, dispatch, user } = this.props;
        let listItems = [];
        if(purchaseOrListing){
            listItems = sellerItems;
        } else {
            listItems = orders;
        }
        if (purchaseOrListing && remove){
            listItems.splice(remove);
        }

        if (!purchaseOrListing){
            return(
                <div>
                    { status === ('loading...' || "Failed") ? <div>{status}</div>
                    : !!listItems && listItems.length > 0 ? 
                            <div>
                                <Table striped bordered id="dAliceBlue" className="dTextCenter">
                                    <thead>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Total Number of Items</th>
                                            <th>Total Price</th>
                                            {/* <td>Items</td> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listItems.map((item,index) => {
                                            return (
                                                <tr key={index}>
                                                    <th>{item.id}</th>
                                                    <td>{item.total_quantity}</td>
                                                    <td>{item.total_price.toFixed(2)}</td>
                                                        {/* <td>
                                                            <select name="items" id="items">
                                                                {item._listings.map(itemInOrder =>{
                                                                    return (
                                                                        <li>{itemInOrder}</li>
                                                                    )
                                                                })}
                                                            </select>
                                                        </td> */}
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </Table>
                            </div>
                    :   <UncontrolledAlert color="info" className="h1 dTextCenter">
                            You have no history
                        </UncontrolledAlert>
                    }
                </div>
            )
        }

        return (
            <div>
            { status === ('loading...' || "Failed") ? <div>{status}</div>
            : !!listItems && listItems.length > 0 ? 
                    <div>
                        <Table striped bordered id="dAliceBlue" className="dTextCenter">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Condition</th>
                                    {purchaseOrListing &&
                                    <th>Remove</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {listItems.map((item,index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.condition}</td>
                                            {purchaseOrListing &&
                                            <td><div onClick={this.handleRemoveListing} data-id={item.id} data-index={index} className="btn">Remove</div></td>}
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </div>
            :   <UncontrolledAlert color="info" className="h1 dTextCenter">
                    You have no history
                </UncontrolledAlert>
            }
        </div>
        )
    }
}