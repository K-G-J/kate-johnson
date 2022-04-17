import React from 'react'

export default function Nav() {
  return (
    <nav className="w-full">
      <div >
        <ul className="flex p-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 justify-between">
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
            Kate Johnson
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
            Projects
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
            Resume
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
            Contact
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
            GitHub
          </li>
          <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
            LinkedIn
          </li>
        </ul>
      </div>
    </nav>
  )
}
