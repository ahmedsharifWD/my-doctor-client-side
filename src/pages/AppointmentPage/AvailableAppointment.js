import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h2>Available Service on {format(date, 'PP')} </h2>
        </div>
    );
};

export default AvailableAppointment;