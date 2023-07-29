import { useEffect } from 'react'
import { portfolio } from '../portfolio'

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio'
  }, [])

  const handleClick = (video) => {
    console.log(video)
    window.open(video, '_blank')
  }
  return (
    <section className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-24 mx-auto bg-gray-200">
        <div className="flex flex-wrap -m-4">
          {portfolio.map((item, i) => (
            <div className="p-4 md:w-1/3" key={i}>
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <a href={item.link} target="_blank">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={require(`../assets/images/${item.image}.jpg`)}
                    alt="blog"
                  />
                </a>
                <div className="p-6">
                  <a href={item.github} target="_blank">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      GitHub
                    </h2>
                  </a>
                  <a href={item.link} target="_blank">
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                      {item.name}
                    </h1>
                  </a>
                  <p className="leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center flex-wrap ">
                    <button
                      onClick={() => handleClick(item.video)}
                      className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                    >
                      Video Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
