import React from 'react';
import createHistory from 'history/createBrowserHistory';

const Container = (props) => {

    // Scroll to Top on Component Change
    const history = createHistory();
    history.listen((location, action) => {
        console.log('Component Change', location);
        window.scrollTo(0,0);
    });

    return (
        <div className="content-wrap">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Container;