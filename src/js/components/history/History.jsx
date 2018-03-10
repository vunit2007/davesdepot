import React from "react";
import {Table, UncontrolledAlert} from "reactstrap";
import { getOrderHistory } from './historyActions';

export default class History extends React.Component{
    constructor(props){
        super(props);
    }
    //When component mounts, go get order history
    componentWillMount() {
        const { dispatch, whereFrom, userLogin, userSignUp, email } = this.props;
        var user = userSignUp;
        if(whereFrom === "login"){
            userLogin.map(item => {
                if(item.email === email){
                    user = (item)
                }
            });
        }
        dispatch(getOrderHistory(user));
    }

    render(){
        //get orders from props
        const { orders, status } = this.props;
        
        if(whereFrom === "login"){
            return (
                <div>
                { status === 'loading' ? <div>{status}</div>
                : !!orders && orders.length > 0 ? 
                    
                        <Table striped dark bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                </tr>
                            </thead>
                            <tbody>
    
                                {orders.map((order,index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index}</th>
                                            <td>{order.id}</td>
                                        </tr>
                                    )
                                })}
    
                            </tbody>
                        </Table>
                :   <UncontrolledAlert color="info">
                        You have no history
                    </UncontrolledAlert>
                }
            </div>
            )
        }

        return (
            <div>
            { status === 'loading' ? <div>{status}</div>
            : !!orders && orders.length > 0 ? 
                
                    <Table striped dark bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                            </tr>
                        </thead>
                        <tbody>

                            {orders.map((order,index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <td>{order.id}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
            :   <UncontrolledAlert color="info">
                    You have no history
                </UncontrolledAlert>
            }
        </div>
        )
    }
}