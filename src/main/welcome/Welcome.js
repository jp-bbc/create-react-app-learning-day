import React, {Component} from 'react';
import './Welcome.css';

class Welcome extends Component {

    render() {
        return (
            <div className="welcome">
                <h1>Welcome <span className="greeting">{this.props.greeting}</span></h1>
            </div>
        );
    }

}

export default Welcome;