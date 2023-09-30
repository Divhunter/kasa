import lodgementListArray from '../../datas/lodgementListArray.json'
import { useParams, Navigate } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Tags from '../../components/Tags'
import StarRate from '../../components/StarRate'
import Collapse from '../../components/Collapse'
import './m-lodgment.css'
import './d-lodgment.css'
import '../../components/Collapse/m-collapse.css'
import '../../components/Collapse/d-collapse.css'
import '../../components/Carrousel/m-carrousel.css'
import '../../components/Carrousel/d-carrousel.css'


const Lodgement = () => {

    // Récupération de la fiche correspondante
	const id = useParams()
	const lodgementCard = lodgementListArray.find(lodgement => lodgement.id === id.id)

    // Création d'une variable pour trouver l'espace entre le nom et le prénom du propriétaire
    var words = lodgementCard.host.name.split(' ')

	return lodgementCard ? (
		
        <main>
            <section className='k-lodgement'> 
                <Carrousel />

                <h1 className='k-lodgement__title'>
                    {lodgementCard.title}
                </h1>

                <h2 className='k-lodgement__sub-title'>
                    {lodgementCard.location}
                </h2>

                <div className='k-lodgement__tags-container'>
                    {lodgementCard.tags.map((tag) => (
                        <Tags
                            key={tag}
                            tag={tag}
                        />
                    ))}
                </div>

                <div className='k-lodgement__stars-and-host-container'>
                    <StarRate />
                    
                    <div className='k-lodgement__stars-and-host-container__host'>
                        <ul className='k-lodgement__stars-and-host-container__host__name'>
                            <li>{words[0]}</li>
                            <li>{words[1]}</li>
                        </ul>
                        <img  className='k-lodgement__stars-and-host-container__host__pic' 
                            src={lodgementCard.host.picture} alt='pic' 
                        />
                    </div>
                </div>
            </section>
            <article className='k-lodgement__collapse'>
                <>
                    <div className="k-lodgement__collapse__container">
                        <Collapse
                            key={lodgementCard.id}
                            title={'Description'}
                            text={lodgementCard.description}
                        />
                    </div>
                    <div className="k-lodgement__collapse__container">
                        <Collapse
                            key={lodgementCard.id}
                            title={'Equipements'} 
                            text={lodgementCard.equipments.map((equip) => (
                                <li key={equip} equip={equip}>{equip}</li>
                            ))}
                        />
                    </div>
                </>
            </article>
		</main>

	):(

		< Navigate replace to ="/Error" />
	
	)
}
 
export default Lodgement