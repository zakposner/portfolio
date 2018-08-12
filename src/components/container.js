import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';

export default class Container extends Component {

    render() {
        return (
            <div className="content-wrap">
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }

    // componentDidMount() {
    //     this.props.history.listen((location, action) => {
    //         console.log('Component Change', location);
    //         window.scrollTo(0,0);
    //     });
    // }

}
