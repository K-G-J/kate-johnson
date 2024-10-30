import React from 'react'

export default function Nav({setView}) {
    return (
        <nav className="w-full">
            <div>
                <ul className="flex p-8 bg-gradient-to-r from-cyan-500 to-blue-500  justify-between">
                    <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300"
                        onClick={() => setView(
                            {about: true, portfolio: false, resume: false, contact: false})}>
                        About Me
                    </li>
                    <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300"
                        onClick={() => setView(
                            {about: false, portfolio: true, resume: false, contact: false})}>
                        Portfolio
                    </li>
                    <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300"
                        onClick={() => setView(
                            {about: false, portfolio: false, resume: true, contact: false})}>
                        Resume
                    </li>
                    <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300"
                        onClick={() => setView(
                            {about: false, portfolio: false, resume: false, contact: true})}>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    )
}
