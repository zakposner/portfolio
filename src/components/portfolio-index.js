import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './project-card';
import projectsList from '../../assets/data/projects';

export default class PortfolioIndex extends Component {

    constructor(props) {
        super(props);

        // Parse active tag if available
        let tag = !props.location.search.length
            ? ''
            : props.location.search
                .replace('?', '')
                .split('&')
                .filter(term => term.indexOf('tag') > -1)[0]
                .replace('tag=', '');

        tag = decodeURI(tag);

        // Apply tag as a filter to the projects list, if there is one
        let projects = !tag.length
            ? projectsList
            : projectsList.filter(project => project.tags.indexOf(tag) > -1);

        // Refs for animating in the projects
        projects.forEach(project => this[project.title] = React.createRef());

        this.state = { 
            tag,
            projects
        }

        this.renderUnfilter = this.renderUnfilter.bind(this);
        this.renderProjects = this.renderProjects.bind(this);
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

    renderProjects() {
        const {projects} = this.state;

        return projects.map(project => {
            return (
                <div className="col col-md-6" key={project.title}>
                    <div className="project not-animated" ref={project.title}>
                        <ProjectCard project={project} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                { this.props.location.search.indexOf('tag') > -1 && this.renderUnfilter() }
                <div className="row projects">
                    {this.renderProjects()}
                </div>
            </div>
        );
    }


    componentDidMount() {
        // animate those puppies
        const {projects} = this.state;

        let index = 0;
        let animationLoop = setInterval(() => {

            this.refs[projects[index].title].classList.remove('not-animated');

            index++;
            if (index === projects.length) clearInterval(animationLoop);

        }, 150);
    }
}