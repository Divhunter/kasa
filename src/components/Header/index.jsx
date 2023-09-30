import { Link } from 'react-router-dom'
import logo from '../../assets/k-header__logo.png'
import './m-header.css'
import './d-header.css'

const Header = () => {
    return (
        <header className='k-header'>
            <img src={logo} alt='Kasa' className='k-header__logo' />
            <nav className='k-header__nav'>
                <Link  className='k-link k-header__nav__home' to="/">ACCUEIL</Link>
                <Link  className='k-link k-header__nav__about' to="/About">A PROPOS</Link>
            </nav>
        </header>
    )
}

export default Header