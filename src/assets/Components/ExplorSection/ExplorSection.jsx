import './ExplorSection.css'
import ExplorCard from '../ExplorCard/ExplorCard'
import nature from '../../images/ExplorNature.png'
import cities from '../../images/ExploreCities.png'
const ExplorSection = () => {
    return (
        <div className='explor-section'>
        <ExplorCard img={nature} title="Promotion" heading="Explore Nature" btn="View Packages"/>
        <ExplorCard img={cities} title="Promotion" heading="Explore Cities" btn="View Packages"/>
        </div>
    )
}

export default ExplorSection
