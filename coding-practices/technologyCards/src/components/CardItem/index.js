import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-design`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img className="card-img" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default TechnologyCard
