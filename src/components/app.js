import React from 'react'
import Table from './table';

const students = [
    {
        student: "First",
        course: "Course",
        grade: 99
    },
    {
        student: "Second",
        course: "Course",
        grade: 68
    },
    {
        student: "Third",
        course: "Course",
        grade: 76
    }
];

export default () => (
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students} />
    </div>
)