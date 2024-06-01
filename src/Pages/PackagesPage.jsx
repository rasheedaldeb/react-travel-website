import React from 'react'
import NavBar from '../assets/Components/NavBar/NavBar'
import Hero from '../assets/Components/Hero/Hero'
import PackagesCardsSec from '../assets/Components/PackagesCardsSec/PackagesCardsSec'
const PackagesPage = () => {
    return (
        <div>
            <NavBar menue={[{ title:"Home", path:"/"}, {title:"About", path: "/about"}, { title:"Packages", path:"/packages"}, { title:"Services", path:"/services"}]} button="Get in Touch"/>
            <Hero HeroTitle="Travel With Us" imgSrc="./imgs/packagesHero.png" otherPages="others"/>
            <PackagesCardsSec/>
        </div>
    )
}

export default PackagesPage
