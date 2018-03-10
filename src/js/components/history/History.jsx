import React from "react";
import {Table} from "reactstrap";
import { getOrderHistory } from './historyActions';

export default class History extends React.Component{
    constructor(props){
        super(props);
    }
    //When component mounts, go get order history
    componentWillMount() {
        ;
        const { dispatch, whereFrom, userLogin, userSignUp } = this.props;
        var user = userSignUp;
        if (whereFrom === "login"){
            user = userLogin;
        }
        
        console.log("user: ", user);
        dispatch(getOrderHistory(user));
    }

    render(){
        //get orders from props
        const { orders, status, user } = this.props;
        
        return (
            <div>
            { status === 'loading' ? <div>{status}</div>
            : <Table striped dark bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                    </tr>
                </thead>
                <tbody>

                    {!!orders && orders.map((item,index) => {
                        return (
                            <tr key={index}>
                                <th>{index}</th>
                                <td>{item.id}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            }
        </div>
        )
    }
}