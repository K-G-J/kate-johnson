import './App.css'
import '@material-tailwind/react/tailwind.css'
import Nav from './components/Nav'
import {useState} from 'react'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
    const [view, setView] = useState({about: true, portfolio: false, resume: false, contact: false})
    const {about, portfolio, resume, contact} = view

    return (
        <>
            <Nav setView={setView}/>
            {about && <About/>}
            {portfolio && <Portfolio/>}
            {resume && <Resume/>}
            {contact && <Contact/>}
            <Footer/>
        </>
    )
}

export default App
