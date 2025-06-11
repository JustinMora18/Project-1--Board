import React from 'react'
import CourseList from './Components/CourseList.jsx'
import './index.css'

function App() {
    return (
        <div className="app">
            <h1 className="main-title">
                <span>Computer</span>
                <span>Science</span>
                <span>Learning Hub</span>
            </h1>
            <CourseList />
        </div>
    )
}

export default App;