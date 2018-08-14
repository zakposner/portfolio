const Timeline = (props) => {

    const {entries} = props;
    let timelineEntries = [];

    for (let i = 0; i < entries.length; i++) {
        
    }

    return (
        <div className="timeline__wrap">
            <div className="timeline">
                {timelineEntries}
            </div>
        </div>
    )
}

export default Timeline;
