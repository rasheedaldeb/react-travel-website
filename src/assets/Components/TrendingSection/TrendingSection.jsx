import './TrendingSection.css'
import HeadingSection from '../HeadingSection/HeadingSection.jsx'
import TrendingCards from '../TrendingCards/TrendingCards.jsx'
import switzerland from '../../images/Switzerland.png'
import Amazon from '../../images/Amazon.png'
import Giza from '../../images/Giza.png'
import SwitzerlandFlag from '../../images/Switzerland.svg'
import brazilFlag from '../../images/brazil.svg'
import egiptFlag from '../../images/egipt.svg'
import calender from '../../images/calender.svg'
import userAvatar from '../../images/user-avatar.svg'
import stars from '../../images/stars.png'
const TrendingSection = () => {
    return (
        <div className='trending-section'>
        <HeadingSection  h4="TRENDY" h1="Our Trending Tour Packages"/>
        <div className="trending-cards">
            <TrendingCards img={switzerland} flag={SwitzerlandFlag} calender={calender} user={userAvatar} rating={stars} days="8 days" people="30 People going" heading="Switzerland" description="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Explore Now"/>
            <TrendingCards img={Amazon} flag={brazilFlag} calender={calender} user={userAvatar} rating={stars} days="8 days" people="60 People going" heading="Amazon" description="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Explore Now"/>
            <TrendingCards img={Giza} flag={egiptFlag} calender={calender} user={userAvatar} rating={stars} days="8 days" people="120 People going" heading="Giza" description="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Explore Now"/>
        </div>
        </div>
    )
}

export default TrendingSection
