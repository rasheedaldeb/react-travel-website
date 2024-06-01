import './Services.css';
import HeadingSection from '../HeadingSection/HeadingSection.jsx';
import ServicesCards from '../ServicesCards/ServicesCards.jsx';
import man from '../../images/man.png';
import plane from'../../images/plane.png';
import hands from'../../images/hands.png'
import group from'../../images/group.png'
const Services = () => {
    return (
        <div className='services'>
        <HeadingSection h4="CATEGORY" h1="We Offer Best Services" />
        <div className="cards">
        <ServicesCards img={man} title="Guided Tours" text="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
        <ServicesCards img={plane} title="Best Flights Options" text="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
        <ServicesCards img={hands} title="Religious Tours" text="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
        <ServicesCards img={group} title="Medical insurance" text="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
        </div>
        </div>
    )
}

export default Services
