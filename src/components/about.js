import React, { Component } from 'react';

export default class About extends Component {

    render() {

        // Images
        const heroImg = {
            src: 'https://vignette.wikia.nocookie.net/kingofthehill/images/1/1e/Gary_Busey.jpg/revision/latest?cb=20130527084456',
            alt: ''
        }

        return (
            <div>
                <h1 className="page-title">About</h1>

                <div className="about__upper">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={heroImg.src} alt={heroImg.alt} />
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h2>Hey, it's me.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about__lower">
                
                </div>

            </div>
        );
    }
}