import PackagesCard from '../PackagesCard/PackagesCard'
import './PacagesCardsSec.css'
import {data} from '../../../../public/PackagesCardData.js'
import Footer from '../Footer/Footer.jsx'
const PackagesCardsSec = () => {
    return (
        <>
        <div className='packages-section'>
        {data.map((element, index)=>{
            return(
                <PackagesCard key={index} image={element.img} date={element.date} people={element.people} header={element.header}
                description={element.description} price={element.price} icon={element.evaluationIcon} eveluation={element.evaluation}/>
            )
        })}
        </div>
        <Footer/>
        </>
        
    )
}

export default PackagesCardsSec
