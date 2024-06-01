import './Tour_plans.css'
import HeadingSection from '../HeadingSection/HeadingSection'
import plansImg from '../../images/plans.png'
const Tour_Plans = ({plansInfo, vecationPrecrnt, vecationTitle, honyMoonPrecent, honyMoonTitle}) => {
    return (
        <div className='plans'>
            <img src={plansImg} alt="" />
                <div className="plans-info">
                <HeadingSection h4="Trend" h1="Our Popular Tour Plans"  />
                <p>{plansInfo}</p>
                <div className="precentage">
                    <div className="vecation">
                        <p>{vecationPrecrnt}</p>
                        <h4>{vecationTitle}</h4>
                    </div>
                    <div className="hoony-moon">
                        <p>{honyMoonPrecent}</p>
                        <h4>{honyMoonTitle}</h4>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Tour_Plans
