import NavBar from '../assets/Components/NavBar/NavBar'
import Hero from '../assets/Components/Hero/Hero'
import Services from '../assets/Components/Services/Services'
import ExplorSection from '../assets/Components/ExplorSection/ExplorSection'
import TrendingSection from '../assets/Components/TrendingSection/TrendingSection'
import Footer from '../assets/Components/Footer/Footer'
const HomePage = () => {
    return (
        <div>
        <NavBar menue={[{ title:"Home", path:"/"}, {title:"About", path: "/about"}, { title:"Packages", path:"/packages"}, { title:"Services", path:"/services"}]} button="Get in Touch"/>
        <Hero HeroTitle="No Matter Where You’re Going To,We’ll Take You There" imgSrc="./imgs/hero.png"/>
        <Services/>
        <ExplorSection/>
        <TrendingSection/>
        <Footer/>
        </div>
    )
}

export default HomePage
