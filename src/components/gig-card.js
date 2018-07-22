import React from 'react';

const GigCard = (props) => {

    const {gig} = props;

    if (!gig) return '<div><div>';

    let currentClass = gig.end.toLowerCase() === 'current' ? 'current' : '';

    // Parse Logo
    let logo = gig.logoSrc.length
        ? <img className="gig__logo" src={`/assets/img/${gig.logoSrc}`} alt={`${gig.company} logo`} />
        : '';

    // Parse Content
    const bullets = gig.bullets.map(bullet => <li key={bullet}>{bullet}</li>);

    // Parse Tags
    let tagOutput = '';
    let tags = '';

    if (gig.tags.length) {
        tags = gig.tags.map(tag => <span>{tag}</span>);
        tagOutput = (
            <div className="card-footer">
                {tags}
            </div>
        );
    }    

    return (
        <div className={"gig row mb-c " + currentClass}>

            <div className="col-12 col-lg-3">
                <div className="gig__dates">
                    <span className="gig__start">{gig.start}</span>
                    <span className="gig__delimiter">-</span>
                    <span className="gig__end">{gig.end}</span>
                </div>
            </div>
            
            <div className="col-12 col-lg-9">
                <div className="card shadow-sm gig__details">
                    <div className="card-header">
                        {logo}
                        <h2 className="gig__company">{gig.company}</h2>                        
                    </div>
                    <div className="card-body">
                        <h5 className="gig__title mb-3"> 
                            Role: {gig.title}
                        </h5>
                        {gig.description.length > 0 && <p>{gig.description}</p>}
                        <ul className="bullets">
                            {bullets}
                        </ul>
                    </div>
                </div>
                {tagOutput}
            </div>
            
        </div>
    );

}

export default GigCard;