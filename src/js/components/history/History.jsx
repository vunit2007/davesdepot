import React from "react";
import {Table, UncontrolledAlert} from "reactstrap";
import { CSSTransitionGroup } from 'react-transition-group'
import { getOrderHistory, getSellerItems } from './historyActions';

export default class History extends React.Component{
    constructor(props){
        super(props);
    }
    //When component mounts, go get order history
    componentWillMount() {
        const { dispatch, user } = this.props;
        if(this.props.userType === "seller"){
            dispatch(getSellerItems(user));
        } else{
        dispatch(getOrderHistory(user));
        }
    }

    render(){
        //get orders from props
        const { orders, status, sellerItems } = this.props;
        let listItems = orders;
        if(orders === null){
            listItems = sellerItems;
        }
        
        return (
            <div>
            { status === ('loading...' || "Failed") ? <div>{status}</div>
            : !!listItems && listItems.length > 0 ? 
                
                    <Table striped dark bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listItems.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{item.id}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
            :   <UncontrolledAlert color="info" className="h1 dTextCenter">
                    You have no history
                </UncontrolledAlert>
            }
        </div>
        )
    }
}