import React from 'react'
import NavBar from '../assets/Components/NavBar/NavBar'
import Hero from '../assets/Components/Hero/Hero'
import Sightseeing from '../assets/Components/SightseeingSection/Sightseeing'
import Video from '../assets/Components/VideoSection/Video'
import video from '../assets/images/video-img.png'
import play from '../assets/images/play.svg'
import Tour_Plans from '../assets/Components/Tour PlansSection/Tour_Plans'
import Footer from '../assets/Components/Footer/Footer'
const AboutPage = () => {
    return (
        <div>
            <NavBar menue={[{ title:"Home", path:"/"}, {title:"About", path: "/about"}, { title:"Packages", path:"/packages"}, { title:"Services", path:"/services"}]} button="Get in Touch"/>
            <Hero HeroTitle="About Us" imgSrc="./imgs/About-hero.png" otherPages="others"/>
            <Sightseeing/>
            <Video videoTitle="Wanderlust" bgImg={video} playLogo={play}/>
            <Tour_Plans plansInfo="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium." vecationPrecrnt="78%" vecationTitle="Vacations" honyMoonPrecent="55%" honyMoonTitle="Honeymoon" />
            <Footer/>
        </div>
    )
}

export default AboutPage
