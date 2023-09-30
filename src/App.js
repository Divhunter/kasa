import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Lodgement from './pages/Lodgement'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/m-app.css'
import './styles/d-app.css'

const App = () => {
    
    return (
        <div>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Lodgement/:id" element={<Lodgement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            <Footer />
        </div>
    )
}

export default App