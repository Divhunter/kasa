import lodgementListArray from '../../datas/lodgementListArray.json'
import fStar from '../../assets/k-full-star.png'
import eStar from '../../assets/k-empty-star.png'
import { useParams } from 'react-router-dom'
import './m-starRate.css'
import './d-starRate.css'

// Définition des notes
const StarRate = () => {

    // Récupération de la fiche correspondante
    const id = useParams()
    const lodgementCard = lodgementListArray.find(lodgement => lodgement.id === id.id)

    // Création d'une variable pour les étoiles pleines ou roses
    var fullStar = parseInt(lodgementCard.rating)

    // Création d'une variable pour les étoiles vides ou grises
    var emptyStar = 5 - fullStar
    
    // Définition d'un objet tableau des étoiles pleines
    const fullStarsArray = []

    // Définition d'un objet tableau des étoiles vides
    const emptyStarsArray = []

    // Définition d'un objet tableau qui récupères l'ensemble des étoiles
    const ratingArray= [fullStarsArray, emptyStarsArray]
   
    // Récupération des étoiles pleines à partir d'une boucle for
    for (let index = 0; index < fullStar; index++) {

        // Insertion de ces étoiles dans le tableau principal
        fullStarsArray.push(
        <img key={index} src={fStar} alt='fullStar' 
        className='stars'/>,
        )
    }

    // Récupération des étoiles vides à partir d'une boucle for
    for (let index = 0; index < emptyStar; index++) {

        // Insertion de ces étoiles dans le tableau principal
        emptyStarsArray.push(
        <img key={index} src={eStar} alt='fullStar' 
        className='stars'/>,
        )
    }
        
    return (
        <div className='container-stars'>
            {ratingArray}
        </div>
    )
}

export default StarRate