import React, {Component} from 'react';
import './Main.css';

import Welcome from './welcome/Welcome';
import Order from './order/Order';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <Welcome greeting="<Your Name>" />
                    <Order />
                </div>
            </div>
        );
    }
}

export default Main;