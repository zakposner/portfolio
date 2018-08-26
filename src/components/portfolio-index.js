import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './project-card';
import projectsList from '../../assets/data/projects';
import Page404 from './404';

function getActiveTag(props) {
    let tag = !props.location.search.length
        ? ''
        : props.location.search
            .replace('?', '')
            .split('&')
            .filter(term => term.indexOf('tag') > -1)[0]
            .replace('tag=', '');

    return decodeURI(tag);
}

function getFilteredProjects(tag) {
    return !tag.length
        ? projectsList
        : projectsList.filter(project => project.tags.indexOf(tag) > -1);
}

export default class PortfolioIndex extends Component {

    constructor(props) {
        super(props);

        // Parse active tag if available
        let tag = getActiveTag(props);

        // Apply tag as a filter to the projects list, if there is one
        let projects = getFilteredProjects(tag);

        // Refs for animating in the projects
        projects.forEach(project => this[project.title] = React.createRef());

        this.state = { 
            tag,
            projects
        }

        this.renderUnfilter = this.renderUnfilter.bind(this);
        this.renderProjects = this.renderProjects.bind(this);
        this.renderProjectColumns = this.renderProjectColumns.bind(this);
        this.animateProjects = this.animateProjects.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let tag = getActiveTag(nextProps);
        let projects = getFilteredProjects(tag);

        this.setState({
            tag,
            projects
        })
    }

    // Only runs when there query string contains 'tag'
    renderUnfilter() {
        const {tag} = this.state;

        return (
            <div className="projects__unfilter mb-c">
                <p>
                    Viewing projects tagged with <span className="tag">{tag}</span>
                </p>
                <Link to='/'>
                    View All
                </Link>
            </div>
        )
    }

    renderProjects(segment) {
        let {projects} = this.state;

        // TODO: refactor this into something more clever
        if (segment === 'even') {
            projects = projects.filter((project, i) => {
                return i % 2 === 0;
            });
        }
        else if (segment === 'odd') {
            projects = projects.filter((project, i) => {
                return i % 2 === 1;
            });
        }

        return projects.map(project => {
            return (
                <div key={project.title}>
                    <div className="project not-animated" ref={project.title}>
                        <ProjectCard project={project} />
                    </div>
                </div>
            );
        });
    }

    renderProjectColumns() {
        if ( window.innerWidth > 1000 ) {
            return (
                <div className="row">
                    <div className="col col-md-6">
                        {this.renderProjects('even')}
                    </div>
                    <div className="col col-md-6">
                        {this.renderProjects('odd')}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <div className="col">
                        {this.renderProjects()}
                    </div>
                </div>
            );
        }
    }

    animateProjects() {
        const {projects} = this.state;

        let index = 0;
        this.animationLoop = setInterval(() => {

            this.refs[projects[index].title].classList.remove('not-animated');

            index++;
            if (index === projects.length) clearInterval(this.animationLoop);

        }, 150);
    }

    render() {
        const location = this.props.location.pathname;

        if (location === '/' || location.indexOf('/portfolio') > -1) {
            return (
                <div>
                    <h1 className="page-title">Portfolio</h1>
                    { this.props.location.search.indexOf('tag') > -1 && this.renderUnfilter() }
                    <div className="projects">
                        {this.renderProjectColumns()}
                    </div>
                </div>
            );
        }

        // Handle 404 pages here
        else {
            return (
                <Page404 />
            );
        }
    }


    componentDidMount() {
        // animate those puppies in
        this.animateProjects();
    }

    componentDidUpdate() {
        // animate those puppies back in
        this.animateProjects();
    }

    componentWillUnmount() {
        clearInterval(this.animationLoop);
    }
}