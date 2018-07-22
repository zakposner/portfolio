import React from 'react';

const SkillCard = ({skill}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <span className={`devicons devicons-${skill.class}`}></span>
                <h3>{skill.name}</h3>
            </div>
        </div>
    );
}

export default SkillCard;
