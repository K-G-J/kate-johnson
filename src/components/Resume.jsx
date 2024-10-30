import {useEffect} from 'react'
import resume from '../assets/resume.pdf'

export default function Resume() {
    useEffect(() => {
        document.title = 'Resume'
    }, [])

    return (<div>
        <section className=" bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div className="max-w-6xl mx-auto px-5 py-24">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="title-font mb-3 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
                        Who am I?
                    </h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-base">
                        I'm Kate, a dedicated Senior Software Engineer with a passion for
                        building high-quality, scalable technology solutions.
                        With years of experience in financial systems and full-stack
                        development, I specialize in TypeScript, React, and blockchain
                        technologies.
                        My journey has led me to lead strategic projects, enhance system
                        performance, and deliver impactful products in digital assets and
                        emerging technologies.
                        Coding isn’t just my career; it's my lifelong pursuit. I’m driven by
                        problem-solving, creativity, and the challenge of innovating with
                        cutting-edge tools.
                        Every day, I’m eager to learn, collaborate, and contribute to projects
                        that make a difference.
                    </p>
                    <a href={resume} download={resume} target="_blank">
                        <button
                            className="bg-gradient-to-r from-cyan-200 to-blue-300 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg mt-6">
                            FULL RESUME
                        </button>
                    </a>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* Skills  */}
                    <div className="xl:w-full md:w-full p-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-lg font-medium title-font mb-2">Skills</h2>

                            <p className="leading-relaxed text-base">
                                <p className="font-medium">Languages</p>
                                TypeScript, JavaScript, Python, Solidity, Golang, Java, SQL
                            </p>
                            <br/>

                            <p className="leading-relaxed text-base">
                                <p className="font-medium">Frameworks & Libraries</p>
                                React, React Native, Flask, Vite
                            </p>
                            <br/>

                            <p className="leading-relaxed text-base">
                                <p className="font-medium">Tools</p>
                                Git, Docker, Bash, Selenium, WebDriver
                            </p>
                            <br/>

                            <p className="leading-relaxed text-base">
                                <p className="font-medium">Databases</p>
                                MySQL, PostgreSQL, MongoDB
                            </p>
                            <br/>

                            <p className="leading-relaxed text-base">
                                <p className="font-medium">Blockchain & Related Technologies</p>
                                Ethereum, Smart Contracts (Solidity)
                            </p>
                        </div>
                    </div>
                    {/* Experience */}
                    <div className="xl:w-full md:w-full p-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                                </svg>
                            </div>
                            <h2 className="text-lg font-medium title-font mb-10">
                                Experience
                            </h2>

                            <p className="leading-relaxed text-base font-bold">Consensys</p>
                            <p>Senior Software Engineer</p>
                            <ul className="list-disc ml-5">
                                <li>Led full-stack projects using TypeScript, delivering
                                    scalable and maintainable solutions.
                                </li>
                                <li>Developed and maintained unit and end-to-end tests, ensuring
                                    robust application performance.
                                </li>
                                <li>Enhanced blockchain-related mobile apps with React Native,
                                    improving user experience.
                                </li>
                                <li>Created APIs and internal products, fostering collaboration
                                    across Security and Assets teams.
                                </li>
                                <li>Contributed to the multichain initiative, enabling
                                    cross-chain compatibility and product expansion.
                                </li>
                            </ul>
                            <br/>

                            <p className="leading-relaxed text-base font-bold">Popcorn
                                Network</p>
                            <p>Software Engineer</p>
                            <ul className="list-disc ml-5">
                                <li>Developed full-stack applications using TypeScript,
                                    contributing to front-end and back-end features.
                                </li>
                                <li>Built and deployed secure Smart Contracts in Solidity,
                                    enhancing blockchain solutions.
                                </li>
                                <li>Improved system performance by 15% and maintained 95% code
                                    coverage with automated testing.
                                </li>
                                <li>Implemented CI/CD pipelines and object-oriented
                                    architecture, reducing deployment time by 40%.
                                </li>
                                <li>Supported migration of legacy applications to modern stacks,
                                    increasing efficiency by 50%.
                                </li>
                            </ul>
                            <br/>

                            <p className="leading-relaxed text-base font-bold">THE rAVe
                                Agency</p>
                            <p>Lead Augmented and Virtual Reality Engineer</p>
                            <ul className="list-disc ml-5">
                                <li>Created an augmented reality filter used by over 100,000
                                    people worldwide.
                                </li>
                                <li>Engineered AR games, shopping, and promotional experiences
                                    for events with 20,000+ attendees.
                                </li>
                                <li>Conducted research and published a thesis on the progression
                                    of augmented and virtual reality.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Education */}
                    <div className="xl:w-full md:w-full p-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-lg font-medium title-font mb-10">Education</h2>

                            <p className="leading-relaxed text-base font-bold">Northeastern
                                University</p>
                            <p className="leading-relaxed text-base">Master of Science in
                                Computer Science • GPA: 4.0 • 2025</p>
                            <br/>

                            <p className="leading-relaxed text-base font-bold">The University of
                                North Carolina at Chapel Hill</p>
                            <p className="leading-relaxed text-base">Master's in Emerging
                                Technology Research, Minor in Augmented and Virtual Reality •
                                GPA: 4.0</p>
                            <p className="leading-relaxed text-base">Bachelor's in Environmental
                                Studies • GPA: 4.0</p>
                            <br/>

                            <p className="leading-relaxed text-base font-bold">Columbia
                                University</p>
                            <p className="leading-relaxed text-base">Professional Certification
                                in Software Engineering • GPA: 4.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}
