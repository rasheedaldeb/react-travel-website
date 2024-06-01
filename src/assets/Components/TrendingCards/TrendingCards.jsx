import './TrendingCards.css'
const TrendingCards = ({img, flag, calender, user, rating, days, people, heading, description, btn}) => {
    return (
        <div className='trending-card'>
        <img src={img} alt="" className='main-img'/>
        <img src={flag} alt="" className='flag' />
        <div className="top-info">
            <div className="right">
            <img src={calender} alt="" />
            <span>{days}</span>
            </div>
            <div className="left">
                <img src={user} alt="" />
                <span>{people}</span>
            </div>
        </div>
        <div className="header">
            <h2>{heading}</h2>
            <img src={rating} alt="" />
        </div>
        <p>{description}</p>
        <button>{btn}</button>
        </div>
    )
}

export default TrendingCards
