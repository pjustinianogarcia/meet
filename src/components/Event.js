// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    if (!event) {
        return null;
    }


    return (
        <li className="event">
            <div className="summary">{event.summary}</div>
            <div className="location">{event.location}</div>
            <p className="created">{new Date(event.created).toUTCString()}</p>
            {showDetails ?
                <p className="details">{event.description}</p> :
                null
            }
            <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "hide details" : "show details"}
            </button>
        </li>
    );
};

export default Event;
