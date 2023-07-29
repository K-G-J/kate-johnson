import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About Me'
  }, [])
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500   dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
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
                I'm Kate, a dedicated software engineer with a love for
                all things coding. Coding isn't just a profession for me, it's
                my life's passion. I revel in the complex puzzle-solving and
                creative aspects of it, and love exploring the potential of
                emerging technologies. Beyond my professional experiences, I've
                acquired a Professional Software Engineering Certification from
                Columbia University and a Master's Degree in Emerging Technology
                Research from The University of North Carolina at Chapel Hill.
                I'm currently expanding my academic repertoire by pursuing a
                Master's in Computer Science at Northeastern University.
                Regardless of where I am or what I'm working on, my coding
                passion remains at the heart of all my endeavors. Always eager
                to tackle new challenges and connect with like-minded tech
                enthusiasts, feel see what I have been working on lately on my{' '}
                <a href="https://github.com/K-G-J" target="_blank">
                  GitHub!
                </a>
              </p>
              {/* <p className="mt-2 text-gray-600"><a href="https://youtu.be/Dhje-1qkttQ" target="_blank">Click here to checkout my latest project 😄</a></p> */}
            </div>
          </div>
          <hr className="mt-6" />
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
