import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';
import SkillCard from './skill-card';
import skillsList from '../../assets/data/skills';

const skillsFilters = ['Languages', 'Libraries', 'Tools', 'Platforms'];

export default class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = { filters: [] };

        this.renderSkills = this.renderSkills.bind(this);
        this.renderFilters = this.renderFilters.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    renderFilters() {
        return skillsFilters.map(filter => {
            return (
                <div className="filter" key={filter}>
                    <div className="pretty p-default p-round p-smooth p-fill">
                        <input type="checkbox" data-filter={filter.toLowerCase()} onChange={this.handleFilterChange} />
                        <div className="state p-success">
                            <label><span>{filter}</span></label>
                        </div>
                    </div>
                </div>
            );
        });
    }

    handleFilterChange(event) {
        let currentFilters = this.state.filters;
        let target = event.target.getAttribute('data-filter');
        let active = event.target.checked;

        if ( currentFilters.includes(target) && !active ) {
            currentFilters.splice( currentFilters.indexOf(target), 1 );
        } else if ( !currentFilters.includes(target) && active ) {
            currentFilters.push(target)
        }

        this.setState({ filters: currentFilters });
    }

    renderSkills() {

        // Sort alpha
        // TODO: Sorting methods?
        let skills = skillsList.sort((a, b) => {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        });

        let {filters} = this.state;

        // Apply any active filters
        if (filters.length) {
            skills = skills.filter(skill => {
                return _.intersection(skill.tags, filters).length > 0;
            });
        }

        return skills.map(skill =>  <SkillCard skill={skill} key={skill.name} />);
    }

    render() {
        return (
            <div>
                <div className="row filters">
                    { this.renderFilters() }
                </div>
                <ReactCSSTransitionGroup
                    className="row skills"
                    transitionName="card"
                    transitionAppear={true}                    
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                        { this.renderSkills() }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
    
}