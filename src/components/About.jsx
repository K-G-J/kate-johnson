import {useEffect} from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'About Me'
    }, [])
    return (
        <div
            className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500   dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div
                className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden">
                    <img
                        className="w-full"
                        src={require('../assets/images/banner.jpg')}
                        alt="banner"
                    />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <img
                        className="h-32 w-32 bg-white p-2 rounded-full   "
                        src={require('../assets/images/headshot.jpeg')}
                        alt=""
                    />
                </div>
                <div className="">
                    <div className="text-center mx-14 my-14">
                        <h2 className="text-gray-800 text-3xl font-bold">Kate Johnson</h2>
                        <a href="https://github.com/K-G-J" target="_blank">
                            <p className="text-gray-400 mt-2">@k-g-j</p>
                        </a>
                        <p className="mt-2 text-gray-600 font-bold">
                            Passionate Software Engineer
                        </p>
                        <div className="px-14">
                            <p className="mt-2 text-gray-600">
                                Hi, I’m Kate – a passionate software engineer dedicated to crafting
                                high-quality, impactful technology solutions.
                                Coding isn’t just a profession for me; it’s a lifelong pursuit. I
                                thrive on solving complex challenges and embracing the creative
                                aspects of development, especially through emerging technologies.
                                With a strong background as a Senior Software Engineer specializing
                                in financial systems and full-stack development, I bring expertise
                                in building scalable, high-performance applications.
                                My work focuses on optimizing system performance and leading
                                strategic initiatives to enhance user experiences.
                                Whether I’m at my desk or exploring new ideas, coding and thoughtful
                                software design are always at the heart of what I do.
                                I’m eager to connect with like-minded tech enthusiasts and tackle
                                new challenges. Check out what I’ve been working on recently on my
                                <a href="https://github.com/K-G-J" target="_blank">
                                    GitHub!
                                </a>
                            </p>
                            {/* <p className="mt-2 text-gray-600"><a href="https://youtu.be/Dhje-1qkttQ" target="_blank">Click here to checkout my latest project 😄</a></p> */}
                        </div>
                    </div>
                    <hr className="mt-6"/>
                    {/* <div className="flex  bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <span className="font-semibold">NAV BUTTON </span>
              </div>
              <div className="border"></div>
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <span className="font-semibold">NAV BUTTON </span>
              </div>
            </div> */}
                </div>
            </div>
        </div>
    )
}
