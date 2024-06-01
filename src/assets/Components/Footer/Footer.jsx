import  './Footer.css'
import messenger from '../../images/025-messenger.svg'
import linkedin from '../../images/052-linkedin.svg'
import twitter from '../../images/096-twitter.svg'
import twoo from '../../images/097-twoo.svg'
const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
            <div className="right">
                <img src="./imgs/black-logo.png" alt="" />
                <p>Travel helps companies manage payments <br/> easily.</p>
                <div className="social">
                <img src={linkedin} alt="" />
                <img src={messenger} alt="" />
                <img src={twitter} alt="" />
                <img src={twoo} alt="" />
                </div>
            </div>
            <div className="middle">
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="end">
                <h3>Destinations</h3>
                <ul>
                    <li>Maldives</li>
                    <li>Los Angelas</li>
                    <li>Las Vegas</li>
                    <li>Torronto</li>
                </ul>
            </div>
            </div>
            <p className='copyright'>Copyright @ Xpro 2023 All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
