import React from 'react';
import { Link } from 'react-router-dom';

const Tag = (props) => {

    if (props.href) {
        const search = props.search || '';

        return (
            <Link to={`${props.href}?tag=${search}`} className="tag">
                {props.name}
            </Link>
        )
    }
    else {
        return (
            <div className="tag">
                {props.name}
            </div>
        );
    }
    
}

export default Tag;