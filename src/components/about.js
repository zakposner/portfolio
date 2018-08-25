import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const animations = [
    'hero',
    'about',
    'tunes',
    'beer',
    'project'
];

export default class About extends Component {

    constructor(props) {
        super(props);

        // Refs
        animations.forEach(animation => this[animation] = React.createRef());
        this.iframeWrap = React.createRef();

        // Methods
        this.handleIframeReady = this.handleIframeReady.bind(this);
    }

    handleIframeReady() {
        this.refs.iframeWrap.classList.remove('loading');
    }

    render() {

        // Images
        const heroImg = {
            src: '../../assets/img/about-img.jpg',
            alt: 'Me on a friggen boat.'
        }

        const beerOfTheMonth = {
            src: '../assets/img/beer/stone_idolatrous.png',
            alt: 'Idolatrous IPA from Stone Brewing',
            href: 'https://www.stonebrewing.com/beer/stone-seasonals/stone-idolatrous-ipa'
        }

        return (
            <div className="about">
                <h1 className="page-title">About</h1>

                <div className="about__upper">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="shadow-sm mb-4 not-animated" src={heroImg.src} alt={heroImg.alt} ref="hero" />
                            <div className="card shadow-sm mb-4not-animated" ref="tunes">
                                <div className="card-body">
                                    <h4 className="mb-3">Tunes of the Month</h4>
                                    <div className="iframe-wrap loading" ref="iframeWrap">
                                        <iframe width="100%" 
                                                height="150" 
                                                scrolling="no" 
                                                frameBorder="no" 
                                                onLoad={this.handleIframeReady}
                                                allow="autoplay" 
                                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/371567003&color=%2300463e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow-sm mb-4 not-animated" ref="about">
                                <div className="card-body">
                                    <h2 className="mb-3">Hey, I'm Zak.</h2>
                                    <p>I'm a front end developer and I like to build cool stuff that helps people. I get a lot of satisfaction out of a clean, intuitive user interface. Most of all I enjoy the problem solving and exploration involved in building web applications that people use.</p>
                                    <p>I also really like craft beer and cooking.</p>
                                    <div className="btn-group">
                                        <Link to="/contact" className="btn btn-primary">Hire Me</Link>
                                        <Link to="/" className="btn btn-secondary">See My Work</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card shadow-sm not-animated mb-4" ref="beer">
                                        <div className="card-body beer">
                                            <h4 className="mb-3">Beer of the Month</h4>
                                            <a href={beerOfTheMonth.href}>
                                                <img src={beerOfTheMonth.src} alt={beerOfTheMonth.alt} title={beerOfTheMonth.alt} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card shadow-sm not-animated mb-4" ref="project">
                                        <div className="card-body current-project">
                                            <h4 className="mb-3">Current Side Project</h4>
                                            <h5>Title: TBA</h5>
                                            <p>A little web application to help people quickly and easily fire off well-crafted emails to their elected representatives about current issues and events.</p>
                                            <p>GitHub information to come - <Link to="/contact">contact me</Link> if you have any interest in contributing.</p>
                                        </div>
                                    </div>
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

    componentDidMount() {
        let index = 0;
        this.animationLoop = setInterval(() => {

            this.refs[animations[index]].classList.remove('not-animated');

            index++;
            if (index === animations.length) clearInterval(this.animationLoop);

        }, 150);
    }

    componentWillUnmount() {
        clearInterval(this.animationLoop);
    }
}