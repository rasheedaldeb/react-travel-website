import  './ExplorCard.css'
const ExplorCard = ({img, title, heading, btn}) => {
    return (
        <div className='explor-card'>
            <div className="black-layer"></div>
            <img src={img} alt="" />
        <div className="card-info">
        <h4>{title}</h4>
        <h1>{heading}</h1>
        <button>{btn}</button>
        </div>
        </div>
    )
}

export default ExplorCard
