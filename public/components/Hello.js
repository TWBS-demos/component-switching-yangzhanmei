import React from 'react';
import {Link} from 'react-router';

class Hello extends React.Component {
    render() {
        return (
            <div>Hello
                <Link to='/world'>world</Link>
            </div>
        );
    }
}

export default Hello;