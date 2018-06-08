import React, {Component} from 'react';
import './Order.css';

import NewOrder from './new-order/NewOrder';

class Order extends Component {

    render() {
        return (
            <div className="new-order">
                <h3>Order</h3>
                <NewOrder />
            </div>
        )
    }

}

export default Order;