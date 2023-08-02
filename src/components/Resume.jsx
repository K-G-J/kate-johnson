import { useEffect } from 'react'
import resume from '../assets/resume.pdf'

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume'
  }, [])

  return (
    <div>
      <section className=" bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="max-w-6xl mx-auto px-5 py-24">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className=" title-font mb-3 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
              Who am I?
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              I am a software engineer with several years of experience in
              developing, troubleshooting, and maintaining software
              applications. My expertise is in digital assets and aglorithmic
              trading. However, my extensive knowledge spans the software
              development lifecycle, various programming languages, and database
              systems. With a proven track record in developing complex software
              solutions and conducting technological research, I am eager to
              leverage my knowledge and skills to contribute to successfully
              delivering innovative and effective solutions. Coding is my
              passion, and I feel fortunate to be able to do what I love every
              day.
            </p>
            <a href={resume} download={resume} target="_blank">
              <button className="bg-gradient-to-r from-cyan-200 to-blue-300 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg mt-6">
                FULL RESUME
              </button>
            </a>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skills  */}
            <div className="xl:w-full md:w-full p-4">
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
                  <br />
                  <p className="font-medium">Technical Skills</p>Financial
                  Technology, Digital Asset Trading, Blockchain, Algorithms,
                  Data Structures, Cryptocurrency, Hyper Ledger, Ethereum,
                  Bitcoin, Object Oriented Programming, Agile Methodology,
                  Augmented Reality, Virtual Reality
                </p>

                <p className="leading-relaxed text-base">
                  <br />
                  <p className="font-medium">Software</p>Python, TypeScript,
                  Javascript, Java, C++, C#, Golang, Ruby, Git, Bash, MATLAB,
                  Numpy, Pandas, MatplotLib, Jupyter Notebook, Tensorflow,
                  Pytorch, Flask, SQL, Mysql, PostgreSQL, Mongo Db, GraphQL,
                  Restful APIs, Reactjs, Unity, Unreal Engine
                </p>
                <br />
                {/* <ul className="list-disc">
                  <li>
                    Certified in full-stack development for TypeScript,
                    JavaScript, and Python
                  </li>
                  <li>
                    Highly experienced in Solidity, Vyper, Typescript, Python,
                    and JavaScript for Web3 development and Smart Contract
                    programming
                  </li>
                  <li>
                    Skilled in Node.js, React.js, Next.js, Django, Brownie
                  </li>
                  <li>
                    Proficient in Solidity, Vyper, JavaScript, TypeScript, Ruby,
                    Python, Git, the MERN Stack, SQL, SQLite, MySQL, PostgreSQL,
                    GraphQL, MongoDB, CSS, HTML, C#, AWS, and Swift
                  </li>
                  <li>
                    Heavily experienced and trained in SparkAR, Lens Studio,
                    Unity, Unreal Engine, Zapworks, Blender, Adobe Creative
                    Suite, WordPress, Canva, UX and UI design
                  </li>
                  <li>
                    Experienced using Microsoft Windows, G Suite, iOS and macOS
                    operating systems
                  </li>
                </ul> */}
              </div>
            </div>
            {/* Experience */}
            <div className="xl:w-full md:w-full p-4">
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
                <h2 className="text-lg  font-medium title-font mb-10">
                  Experience
                </h2>
                <p className="leading-relaxed text-base font-bold">
                  Popcorn Network
                </p>
                <p>Software Engineer</p>
                <ul className="list-disc">
                  <br />
                  <li>
                    Developed efficient trading algorithms and strategies for
                    digital assets, increasing profit and trading volume.
                  </li>
                  <li>
                    Applied advanced mathematical techniques and statistical
                    analysis of financial data using Python.
                  </li>
                  <li>
                    Improved system performance by an average of 15% through
                    performance tuning, and achieved 95% code coverage with
                    automated testing systems.
                  </li>
                  <li>
                    Implemented object-oriented architecture and automated build
                    processes, resulting in a reduction of deployment time by
                    40%.
                  </li>
                  <li>
                    Wrote Solidity smart contracts for decentralized finance and
                    governance used by over 10,000 people.
                  </li>
                  <li>
                    Wrote robust smart contract tests and unit, integration, and
                    staging tests for full-stack code in Solidity, TypeScript,
                    and Python.
                  </li>
                  <li>
                    Developed 10+ features and modules in Python, Go, and
                    TypeScript for existing applications, improving user
                    experience and increasing customer satisfaction levels.
                  </li>
                  <li>
                    Assisted in the migration of legacy applications systems to
                    modern technology stacks, streamlining software engineering
                    processes and improving efficiency by over 50%.
                  </li>
                </ul>
                <br />
                <p className="leading-relaxed text-base font-bold">
                  THE rAVe Agency and LAVNCH - Software Engineer and Emerging
                  Technology Researcher
                </p>
                <p>
                  As a software engineer, I assisted with all projects regarding
                  web development, app development, and software engineering. I
                  was the agency’s lead emerging technology (XR) engineer.
                </p>
                <ul className="list-disc">
                  <br />
                  <li>
                    Designed and implemented an augmented reality filter that
                    was used by over 100,000 people worldwide.
                  </li>
                  <li>
                    Engineered augmented reality games, shopping, and
                    promotional experiences for online and tradeshow events
                    attended by over 20,000 people.
                  </li>
                  <li>
                    Created an interactive virtual reality experience showcasing
                    the power of VR technology and the comfortability of VR
                    experiences using Unity3D and C#. The experience increased
                    customer retention by around 10%.
                  </li>
                  <li>
                    Conducted extensive research on emerging technology and
                    wrote a thesis on the topic, focusing on the progression of
                    augmented and virtual reality.
                  </li>
                </ul>
                <br />
                <p className="leading-relaxed text-base font-bold">
                  Orange County Sustainability
                </p>
                <p>Software Engineer</p>
                <ul className="list-disc">
                  <br />
                  <li>
                    Improved SEO for the website by editing and adding tags to
                    HTML pages and increasing the frequency of updates to the
                    website.
                  </li>
                  <li>
                    Improved backend JavaScript code by refactoring the code to
                    use the MERN stack.
                  </li>
                  <li>
                    Developed new features for the web application using Java
                    and JavaScript.
                  </li>
                  <li>
                    Improved the company’s advertising campaign by creating new
                    web graphics for the site using Photoshop.
                  </li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <div className="xl:w-full md:w-full p-4">
              <div className="border border-gray-300 p-6 rounded-lg xl:w-100 md:w-100 p-4">
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
                <h2 className="text-lg font-medium title-font mb-10">
                  Education
                </h2>
                <p className="leading-relaxed text-base font-bold">
                  Northeastern University
                </p>
                <p className="leading-relaxed text-base">
                  Master of Science in Computer Science
                </p>
                <br />
                <p className="leading-relaxed text-base font-bold">
                  Columbia Engineering, Columbia University in the City of New
                  York
                </p>
                <p className="leading-relaxed text-base">
                  Professional Certificate in Software Engineering – Full Stack
                  Development
                </p>
                <p className="leading-relaxed text-base">GPA: 4.0</p>
                <br />
                <p className="leading-relaxed text-base font-bold">
                  The University of North Carolina at Chapel Hill
                </p>
                <p className="leading-relaxed text-base">
                  Master of Arts in Media and Communication – Emerging
                  Technology
                  <br />
                </p>
                <p className="leading-relaxed text-base">
                  Bachelor of Arts in Environmental Studies – Sustainability
                </p>
                <p className="leading-relaxed text-base">
                  Minor in Advertising and Public Relations from the Hussman
                  School of Journalism and Media
                </p>
                <p className="leading-relaxed text-base">
                  GPA: 4.0 and MA Highest Honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
