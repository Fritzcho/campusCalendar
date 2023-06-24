import getschedule from "../utils/getschedule"
import { useState } from "react";

const Schema = ({link}) => {
    const [events, setEvents] = useState({})
    var link = "https://cloud.timeedit.net/umu/web/public1/ri637QZQ3Q0Ze1Q50Y87uQb3ynZ6Z81.ics"
    console.log(getschedule(link));
}

export default Schema

