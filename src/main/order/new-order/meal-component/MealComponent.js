import React, { Component } from 'react';
import './MealComponent.css';

class MealComponent extends Component {

    render() {
        let list;

        if (this.props.items) {
            list = this.props.items.map((v) => {
                return <option key={v} value={v}>{v}</option>
            });
        }
        return (
            <div className="meal">
                <span className="title">{this.props.title}</span>
                <select className="list">{list}</select>
            </div>
        )
    }
}

export default MealComponent;