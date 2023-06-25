import { useState,useEffect } from 'react';
import {events, setEvents} from "../views/schema"
import Schema from '../views/schema';
var usedState = false
function exportSchema(array, setEvents) {
    
    
    if (!usedState){
        setEvents(array)
        usedState = true
    }
    

}
export default exportSchema