import React from 'react'

export default function Nav({showPortfolio, showResume, showContact, showAbout}) {
  const handleAbout = () => {
    showPortfolio(false)
    showResume(false)
    showContact(false)
    showAbout(true)
  }
  const handlePortfolio = () => {
    showResume(false)
    showContact(false)
    showAbout(false)
    showPortfolio(true)
  }
  const handleResume = () => {
    showPortfolio(false)
    showContact(false)
    showAbout(false)
    showResume(true)
  }
  const handleContact = () => {
    showPortfolio(false)
    showResume(false)
    showAbout(false)
    showContact(true)
  }
  return (
    <nav className="w-full">
      <div >
        <ul className="flex p-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 justify-between">
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300" onClick={handleAbout}>
            About Me
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300" onClick={handlePortfolio}>
            Portfolio
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300" onClick={handleResume}>
            Resume
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300" onClick={handleContact}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}
