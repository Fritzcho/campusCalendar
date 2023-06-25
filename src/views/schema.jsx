import getschedule from "../utils/getschedule"
import { useState, useEffect,  } from "react";

var laddat = false
const Schema = ({}) => {
    const [events, setEvents] = useState([])
    if (!laddat) {
        var link = "https://cloud.timeedit.net/umu/web/public1/ri637QZQ3Q0Ze1Q50Y87uQb3ynZ6Z81.ics"
        getschedule(link, setEvents)
        laddat = true
    } else {
        return (
            <ol>
            {events.map(
                events=> (
                    <li key={events}>{events.date} {events.title}</li>
                ))}
            </ol>
        )    
    }
    
    
    
    
}

export default Schema

