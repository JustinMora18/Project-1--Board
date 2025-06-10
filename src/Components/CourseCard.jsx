function CourseCard({ title, description, level, duration, color }) {
    return (
    <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="info">
            <span className={`level ${color.toLowerCase()}`}>{level}</span>
            <span className="duration">{duration}</span>
        </div>
        <button>VIEW</button>
    </div>
    );
}

export default CourseCard;