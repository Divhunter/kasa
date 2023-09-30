import lodgementListArray from '../../datas/lodgementListArray.json'
import { useParams } from 'react-router-dom'
import React, { useState } from "react";
import arrow from '../../assets/k-arrow.png'

// Définition du Carrousel
const Carrousel = () => {

	// Récupération de la fiche correspondante 
	const id = useParams()
	const lodgementCard = lodgementListArray.find(lodgement => lodgement.id === id.id)

	let picsLength = lodgementCard.pictures.length // Définition de la longueur de l'objet Carrousel

	const [currentPic, setCurrentPic] = useState(0) // Définition du state

	// Définition de la fonction pour aller à l'image suivante du carrousel (+1 à currentPic)
	const nextPic = () => {
		setCurrentPic(currentPic === picsLength - 1 ? 0 : currentPic + 1);
	}

	// Définition de la fonction pour aller à l'image précédente du carrousel (-1 à currentPic)
	const prevPic = () => {
		setCurrentPic(currentPic === 0 ? picsLength - 1 : currentPic - 1);
	}

	return (

		<div className='carrousel'>
			{/* On map dans le tableau/objet slides, les images et leurs index */}
		  	{lodgementCard.pictures.map((picture, index) => {
				
				return (
					<div
						// On ajoute l'index à la div et les class active/inactive pour afficher/cacher 
						key={index}
						className={
						index === currentPic ?
							'carrousel carrousel__pictures__active':
							'carrousel carrousel__pictures__inactive'
						}
					>
						{/* Si l'index est égal à currentPic, alors on ajoute l'image au carrousel*/}
						{index === currentPic && (
								<img src={picture} 
									alt='inside-lodgement' 
									className='carrousel__pictures carrousel__pictures__current' 
								/>
							)
						}
					</div>
				)
			})}

			{/* affiche les boutons next/previous et du compteur si il y a plus d'un élément dans le carrousel */}
			{picsLength > 1 ? (
				<>
					<button className='carrousel__button carrousel__button__left' onClick={prevPic}>
						<img src={arrow} alt='left' 
							className='carrousel__button__arrow carrousel__button__arrow__left' 
						/>
					</button>
					<button className='carrousel__button carrousel__button__right' onClick={nextPic}>
						<img src={arrow} alt='right' 
							className='carrousel__button__arrow carrousel__button__arrow__right' 
						/>
					</button>
					<p className='carrousel__count'>
						{currentPic + 1} / {picsLength} 
					</p>
				</>
			) : null}
		</div>
	)
}
 
export default Carrousel