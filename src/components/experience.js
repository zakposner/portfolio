import React, { Component } from 'react';
import GigCard from './gig-card';
import gigs from '../../assets/data/gigs';

export default class Experience extends Component {

    constructor(props) {
        super(props);

        // Build a ref to each gig for animation
        gigs.forEach(gig => {
            this[gig.company] = React.createRef();
        });
    }

    renderGigs() {
        return gigs.map(gig => {
            return (
                <div className="gig-wrap not-animated" ref={gig.company} key={gig.id}>
                    <GigCard gig={gig} />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Experience</h1>
                <div className="gigs">
                    { this.renderGigs() }
                </div>
            </div>
        );
    }

    componentDidMount() {
        // Animate those puppies in
        let index = 0;
        this.animationLoop = setInterval(() => {

            this.refs[gigs[index].company].classList.remove('not-animated');

            index++;
            if (index === gigs.length) clearInterval(this.animationLoop);

        }, 150);
    }

    componentWillUnmount() {
        clearInterval(this.animationLoop);
    }
}
