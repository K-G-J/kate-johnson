import React from 'react'

export default function About() {
  return (
    <div className="h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
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
        <div className=" ">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">Kate Johnson</h2>
            <a href="https://github.com/K-G-J" target="_blank">
              <p className="text-gray-400 mt-2">@k-g-j</p>
            </a>
            <p className="mt-2 text-gray-600 font-bold">
              Web3 and Blockchain Developer
            </p>
            <p className="mt-2 text-gray-600">
              Hi, my name is Kate and I have a passion for 1's and 0's. I love
              coding and after recieving my master's degree studying metaverse
              technology I became fascinated by Web3 development. I hope you
              enjoy looking through some of my blockchain applications. My smart
              contracts are available on my GitHub page. Cheers to Web3!
            </p>
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
