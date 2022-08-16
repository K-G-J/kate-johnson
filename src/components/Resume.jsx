import { useEffect } from 'react'
import resume from '../assets/resume.pdf'

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume'
  }, [])

  return (
    <div>
      <section className=" text-gray-200 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
              Who am I?
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              I am a highly self-motivated and hard-working individual who also
              enjoys teamwork and collaboration. I am a blockchain software
              engineer and well-versed in the full stack of multiple Web2, Web3,
              and mobile programming languages. I specialize in blockchain
              engineering and Web3 development for evm-compatible chains using
              Solidity, Foundry, and Hardhat.
            </p>
            <a href={resume} download={resume} target="_blank">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg mt-6">
                FULL RESUME
              </button>
            </a>
          </div>
          {/* Skills  */}
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
                <h2 className="text-lg  font-medium title-font mb-2">Skills</h2>
                <p className="leading-relaxed text-base">
                  Full stack web development, blockchain software engineering,
                  mobile application development, augmented reality, virtual
                  reality, game development, and programming.
                  <br />
                  Web3 development using Solidity, Foundry, Hardhat, Truffle
                  Suite, ethers.js, web3.js, and Moralis.io
                </p>
                <br />
                <ul className="list-disc">
                  <li>
                    Highly experienced in Solidity, Typescript, and Javascript
                    for Web3 development and Smart Contract programming
                  </li>
                  <li>
                    Proficient in Solidity, JavaScript, TypeScript, Ruby, Java,
                    Git, the MERN Stack, SQL, GraphQl, Mongo DB, CSS, HTML, C#,
                    AWS, PHP, and Swift
                  </li>
                  <li>
                    Heavily experienced and trained in SparkAR, Lens Studio,
                    Unity, Unreal, Zapworks, Blender, Adobe Creative Suite,
                    WordPress, Canva, UX and UI design
                  </li>
                  <li>
                    Experienced using Microsoft Windows, G Suite, iOS and macOS
                    operating systems
                  </li>
                </ul>
              </div>
            </div>
            {/* Experience */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  Experience
                </h2>
                <p className="leading-relaxed text-base font-bold">
                  Popcorn Network
                </p>
                <p>Blockchain and Web3 Software Engineer</p>
                <ul className="list-disc">
                  <br />
                  <li>Smart contract programing</li>
                  <li>Security auditing</li>
                  <lv>Robust smart contract testing</lv>
                  <li>Web3 front-end integrations</li>
                  <li>Defi research and development</li>
                </ul>
                <br />
                <p className="leading-relaxed text-base font-bold">
                  THE rAVe Agency and LAVNCH - Developer and XR Software
                  Engineer
                </p>
                <p>
                  As a developer, I assisted with all projects regarding web
                  development, app development, and software engineering. I was
                  the agency’s lead XR developer.
                </p>
                <ul className="list-disc">
                  <br />
                  <li>Augmented reality filters for social media </li>
                  <li>
                    Augmented reality games, shopping, and promotional
                    experiences{' '}
                  </li>
                  <li>Virtual reality experiences </li>
                  <li>Mobile and app development</li>
                  <li>Website code edits and UX/UI improvements</li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  Education
                </h2>
                <p className="leading-relaxed text-base font-bold">
                  Columbia Engineering, Columbia University in the City of New
                  York
                </p>
                <p className="leading-relaxed text-base">
                  Professional Certificate in Computer Coding – Full Stack
                  Development
                </p>
                <br />
                <p className="leading-relaxed text-base font-bold">
                  The University of North Carolina at Chapel Hill
                </p>
                <p className="leading-relaxed text-base">
                  Master of Arts in Media and Communication – Strategic
                  Communications Track
                  <br />
                  Metaverse Technologies Specialization
                </p>
                <p className="leading-relaxed text-base">
                  Bachelor of Arts degree in Environmental Studies –
                  Sustainability Concentration
                </p>
                <p className="leading-relaxed text-base">
                  Minor in Advertising and Public Relations from the Hussman
                  School of Journalism and Media
                </p>
                <p className="leading-relaxed text-base">
                  GPA: 3.96 and MA High Honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
