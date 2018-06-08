import React, { Component } from 'react';
import './NewOrder.css';

import MealComponent from './meal-component/MealComponent';

class NewOrder extends Component {

    render() {
        const dishItems = [ 'Teriyaki', 'Yaki Udon', 'Ramen' ];
        const meatItems = [ 'Chicken', 'Prawn', 'Beef' ];

        return (
            <div className="new-order-wrapper">
                <p>New Order</p>
                <div className="new-order">
                    <MealComponent title="Dish" items={dishItems} />
                    <MealComponent title="Meat" items={meatItems} />
                </div>
            </div>
        )
    }

}

export default NewOrder;