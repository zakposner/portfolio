import React from 'react';

const SkillCard = ({skill}) => {
    return (
        <div className="col-6 col-md-4 col-lg-3 mb-4 skill">
            <div className="card shadow-sm">
                <div className="card-body">
                    <span className={`devicons devicons-${skill.class}`}></span>
                    <h3>{skill.name}</h3>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;
