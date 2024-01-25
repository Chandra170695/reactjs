import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`banner-card ${className}`}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
