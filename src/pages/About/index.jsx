import MkAboutBannerPicture from '../../assets/k-about-banner__m-picture.jpg'
import DkAboutBannerPicture from '../../assets/k-about-banner__d-picture.jpg'
import collapseAboutArray from '../../datas/collapseAboutArray.json'
import Collapse from '../../components/Collapse'
import '../../components/Collapse/m-collapse.css'
import '../../components/Collapse/d-collapse.css'
import './m-about.css'
import './d-about.css'

const About = () => {
    

    return (
        <main className='k-about'>
            <section className='k-about__banner'>
                <img className='k-about__banner__m-picture' src={MkAboutBannerPicture} alt='mountains' />
                <img className='k-about__banner__d-picture' src={DkAboutBannerPicture} alt='mountains' />
                <div className='k-about__banner__background'></div>
            </section>
            <article className='k-about__collapse'>
                {collapseAboutArray.map((item, index) => (
                    <div key={index} className="k-about__collapse__container">
                        <Collapse 
                            key={index}
                            title={item.title}
                            text={item.text}
                        />
                    </div>
                ))}
            </article>
        </main>
    )
}
 
export default About