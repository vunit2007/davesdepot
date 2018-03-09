import React from "react";
import {Table} from "reactstrap";
import { getOrderHistory } from './historyActions';

export default class History extends React.Component{
    constructor(props){
        super(props);
    }
    //When component mounts, go get order history
    componentDidMount() {
        const { dispatch, userId } = this.props;
        dispatch(getOrderHistory(userId));
    }

    render(){
        //get orders from props
        const { orders, status } = this.props;

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

                    {/* {axios.all(response.data.Search.map((movie, index) => {
                        return axios.get(``)
                            .then(response => {
                                return response.data;
                            })
                    })).then(listItems => { */}
                    

                    {!!orders && orders.map((item,index) => {
                        return (
                            <tr key={index}>
                                <th>{index}</th>
                                <td>{item.id}</td>
                            </tr>
                        )
                    })}

                    {/* })} */}
                </tbody>
            </Table>
            }
        </div>
        )
    }
}