import React from 'react';
import {Link} from 'react-router';

class World extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>Hello</Link>
                <div>World</div>
            </div>
        );
    }
}

export default World;