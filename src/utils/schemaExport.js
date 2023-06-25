import { useState } from 'react';
import { events, setEvents } from '../views/schema';

function exportSchema(array) {
console.log(array)

setEvents(array)

}
export default exportSchema