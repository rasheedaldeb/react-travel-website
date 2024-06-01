import './HeadingSection.css'

const HeadingSection = ({h4, h1 ,desciption, btn }) => {
    return (
        <div className='heading'>
        <h4>{h4}</h4>
        <h1>{h1}</h1>
        <p>{desciption}</p>
        <button>{btn}</button>
        </div>
    )
}

export default HeadingSection
