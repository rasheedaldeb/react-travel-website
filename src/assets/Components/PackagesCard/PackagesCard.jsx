import  './PackagesCard.css'
const PackagesCard = ({image, date, people, header, description, price, icon, eveluation}) => {
    return (
        <div className='packagesCard'>
        <div className="package-info">
        <div className="top">
        <img src={image} alt="" />
        <div className="date-people">
            <p>{date}</p>
            <h4>{people}</h4>
        </div>
        </div>
        <h2>{header}</h2>
        <p>{description}</p>
        <div className="price-eval">
            <p>{price}</p>
            <div className="eval">
            <img src={icon} alt="" />
            <span>{eveluation}</span>
            </div>
        </div>
        </div>
        </div>
    )
}

export default PackagesCard
