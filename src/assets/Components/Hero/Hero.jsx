import './Hero.css'
const Hero = ({HeroTitle, imgSrc , otherPages}) => {
    return (
        <div className='hero' style={{backgroundImage:`url(${imgSrc})`}}>
        <h1 className={otherPages}>{HeroTitle}</h1>
        </div>
    )
}

export default Hero
