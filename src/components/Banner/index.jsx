import kHomeBannerMPicture from '../../assets/k-home-banner__m-picture.jpg'
import kHomeBannerDPicture from '../../assets/k-home-banner__d-picture.jpg'
import './m-banner.css'
import './d-banner.css'

const Banner = () => {
    return (
        <section className='k-home-banner'>
            <img className='k-home-banner__m-picture' src={kHomeBannerMPicture} alt='mountains' />
            <img className='k-home-banner__d-picture' src={kHomeBannerDPicture} alt='mountains' />
            <div className='k-home-banner__background'></div>
            <h1 className='k-home-banner__text'>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner