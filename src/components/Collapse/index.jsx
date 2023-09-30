import { useState } from 'react'
import arrow from '../../assets/k-arrow.png'

// Définition du Collapse
const Collapse = (props) => {  

    // Définition du state (le collapse est fermé par défaut)
    const [isOpen, setIsOpen] = useState(false)

    const isOpenState = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <div
                onClick={isOpenState} 
                className={
                    isOpen ? 
                    'collapse__title collapse__title__to-open': 
                    'collapse__title collapse__title__to-closed'
                }>
                {props.title}
                <img className={
                    isOpen ? 
                    'collapse__arrow collapse__arrow__up': 
                    'collapse__arrow collapse__arrow__down'} 
                    src={arrow} alt='up-arrow' 
                />
                <div className={
                    isOpen ? 
                    'collapse__text collapse__text__open': 
                    'collapse__text collapse__text__closed'}>
                    {props.text}
                </div>
            </div>
        </>
    )        
}

export default Collapse