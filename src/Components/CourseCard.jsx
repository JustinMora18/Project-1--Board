function CourseCard({ title, description, level, duration, color, image }) {
    return (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
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