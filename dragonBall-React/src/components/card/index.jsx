import './style.css'

export const Card = ({image, title, description}) => {
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}