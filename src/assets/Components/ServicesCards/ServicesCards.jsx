import './ServicesCard.css'
const ServicesCards = ({img, title, text}) => {
    return (
        <div className='card'>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{text}</p>
        </div>
    )
}
export default ServicesCards
