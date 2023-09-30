import { Link } from 'react-router-dom';
import lodgementListArray from '../../datas/lodgementListArray.json'
import './m-card.css'
import './d-card.css'

const Card = () => {
    
    return (
        <section className='k-home-card'> 
            {lodgementListArray.map((items, id) => (
                <div className='k-home-card__apartment' key={id}>
                    <Link to={`/Lodgement/${items.id}`}>
                        <img className='k-home-card__apartment__picture' src={items.cover} alt="apartment" />
                        <div className='k-home-card__apartment__background'></div>
                        <p className='k-home-card__apartment__title'>{items.title}</p>
                    </Link>
                </div>
            ))}
        </section>
    )
}

export default Card