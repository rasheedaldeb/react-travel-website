import React from 'react'
import NavBar from '../assets/Components/NavBar/NavBar'
import Hero from '../assets/Components/Hero/Hero'
import Footer from '../assets/Components/Footer/Footer'
const ServicesPage = () => {
    return (
        <div>
        <NavBar menue={[{ title:"Home", path:'/'}, {title:"About", path: '/about'}, { title:"Packages", path:'/packages'}, { title:"Services", path:'/services'}]} button="Get in Touch"/>
        <Hero HeroTitle="About Us" imgSrc="./imgs/hero.png" otherPages="others"/>
        <Footer/>
        </div>
    )
}

export default ServicesPage
