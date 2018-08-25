import React from 'react';
import Tag from './tag';

const ProjectCard = (props) => {
    const {project} = props;

    let image = (
        <img className="card-img-top" src={project.imgSrc} />
    );

    let bullets = (
        <ul className="project__bullets">
            {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
        </ul>
    );

    let tags = (
        <div className="card-footer">
            {project.tags.map(tag => <Tag href='/' key={tag} search={encodeURIComponent(tag)} name={tag} />)}
        </div>
    );

    return (
        <div className="card shadow-sm mb-4">
            {project.imgSrc.length && image}
            <div className="card-body">

                <h2>{project.title}</h2>
                <h5>Role: {project.role}</h5>
                <hr />

                <p>{project.description}</p>
                {bullets}

                <div className="btn-group">
                    {project.link.length > 0 && <a target="_blank" href={project.link} className="btn btn-primary">View Live</a>}
                    {project.code.length > 0 && <a target="_blank" href={project.code} className="btn btn-secondary">View Code</a>}
                </div>
                
            </div>
            {project.tags.length && tags}
        </div>
    );
}

export default ProjectCard;