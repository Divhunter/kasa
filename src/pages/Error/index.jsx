import { Link } from 'react-router-dom';
import './m-error.css'
import './d-error.css'

const Error = () => {
    return (
        <main className="K-error">
            <h1 className="K-error__statut">404</h1>
            <p className="K-error__text">Oups! La page que vous demandez n'existe pas</p>
            <Link className="K-error__link" to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}
 
export default Error