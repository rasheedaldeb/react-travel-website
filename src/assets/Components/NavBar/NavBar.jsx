import {  useState } from 'react'
import { NavLink } from 'react-router-dom' 
import './NavBar.css'
const NavBar = ({menue, button}) => {
    const [bgColor , setbgColor] = useState(false)
    const [Color , setColor] = useState(false)
    const [show, setshow] = useState(false)
    const changColor = ()=>{
        if (window.scrollY >= 50) {
            setbgColor(true)
            setColor(true)
        }else {
            setbgColor(false)
            setColor(false)
        }
    }
    window.addEventListener("scroll" , changColor)
    return (
        <>
        <nav className={bgColor ? "nav navBg" : "nav"}>
            <img src={Color ? "./imgs/black-logo.png" : "./imgs/logo.png"} alt="" />
            <ul className='menu'>
            {menue.map((element, index)=>{
                return(
                    <li key={index} ><NavLink className={Color? "list licolor" : "list" }
                    to={element.path}>{element.title}</NavLink></li>
                )
            })}
            </ul>
            <button className='navBtn'>{button}</button>
            <i className="fa-solid fa-bars f-icon" onClick={() => {
                setshow(true)
            }}>
            </i>
        </nav>
        <div className="mobile">
        <div style={{display: show? "flex": "none"}} className='mobile-nav'>
            <i class="fa-solid fa-x close" onClick={() => {
                setshow(false)
            }}></i>
            <ul className='menu'>
                {menue.map((item, i)=>{return(
                    <li key={i}><NavLink to={item.path}>{item.title}</NavLink></li>
                )})}
            </ul>
            <button className='mobile-btn'>{button}</button>
            </div>
        </div>
        </>
    )
    
}
export default NavBar
