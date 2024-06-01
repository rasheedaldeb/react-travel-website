import HeadingSection from '../HeadingSection/HeadingSection'
import  './Sightseeing.css'
import Sight from "../../images/Sightseeing.png"

const Sightseeing = () => {
    return (
        <div className='sightseing'>
        <HeadingSection h4="Promotion" h1="We Provide You Best Europe Sightseeing Tours" desciption="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" btn="View Packages" />
        <img src={Sight} alt="" />
        </div>
    )
}

export default Sightseeing
