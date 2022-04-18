import './App.css'
import '@material-tailwind/react/tailwind.css'
import Nav from './components/Nav'
import { useState } from 'react'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [about, showAbout] = useState(true)
  const [portfolio, showPortfolio] = useState(false)
  const [resume, showResume] = useState(false)
  const [contact, showContact] = useState(false)

  
  return (
    <>
      <Nav showPortfolio={showPortfolio} showResume={showResume} showContact={showContact} showAbout={showAbout}
        portfolio={portfolio} resume={resume} contact={contact} about={about} 
      />
      {about && <About />}
      {portfolio && <Portfolio /> }
      {resume && <Resume /> }
      {contact && <Contact /> }
      <Footer />
    </>
  )
}

export default App
