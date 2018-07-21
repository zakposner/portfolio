import React, { Component } from 'react';
import GigCard from './gig-card';
import gigs from '../../assets/data/gigs';

export default class Experience extends Component {

    renderGigs() {
        return gigs.map(gig => <GigCard gig={gig} key={gig.company} />);
    }

    render() {
        return (
            <div className="gigs">
                { this.renderGigs() }
            </div>
        );
    }
}
