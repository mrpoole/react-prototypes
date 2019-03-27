import React from 'react';
import Table from './table';

export default () => {

    const students = [
        {
            name: 'Jim Bob',
            course: 'Whittling',
            grade: 100
        },
        {
            name: 'Boba Fett',
            course: 'Bounty Hunting',
            grade: 100
        },
        {
            name: 'Lando Calrissian',
            course: 'Sales',
            grade: 100
        }
    ];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}