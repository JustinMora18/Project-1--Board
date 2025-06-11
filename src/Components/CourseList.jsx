import React from 'react'
import CourseCard from './CourseCard'
import courses from '../data/courses'

const CourseList = () => {
    return (
        <div className="course-grid">
            {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </div>
    )
}

export default CourseList;
