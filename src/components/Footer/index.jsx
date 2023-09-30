import logo from '../../assets/k-footer__logo.png' 
import './m-footer.css'
import './d-footer.css'

const Footer = () => {
    return (
        <footer className='k-footer'>
            <img className='k-footer__logo' src={logo} alt='Kasa' />
            <p className='k-footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
 
export default Footer