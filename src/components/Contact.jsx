import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../utils/helpers'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)

  useEffect(() => {
    document.title = 'Contact'
  }, [])

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`)
      } else {
        setErrorMessage('')
      }
    }
    if (!errorMessage) {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      if (result.text === 'OK') {
        setSuccessMessage(true)
        setTimeout(() => {
          setSuccessMessage(false)
        }, 3000)
        setForm({ name: '', email: '', message: '' })
      } else {
        console.log(result.text)
        setErrorMessage('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="w-full text-gray-900 py-36 bg-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
        <div className="lg:w-3/6 lg:pr-0 pr-0">
          <h1 className="font-medium text-5xl text-white pl-4">
            Get in touch! 👋
          </h1>
          <p className="leading-relaxed mt-4 text-white pr-10 text-center">
            Fill out the form and I will get back to you as soon as I am able.
          </p>
        </div>
        <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
          {errorMessage && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Whoops!&nbsp;</strong>
              <span className="block sm:inline">{errorMessage}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onClick={() => setErrorMessage('')}
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          {successMessage && (
            <div
              className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1"></div>
                <div>
                  <p className="font-bold">Email successfully sent!&nbsp;</p>
                  <p className="text-sm">I will get back to you soon!</p>
                </div>
              </div>
            </div>
          )}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={form.name}
              className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              onBlur={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={form.email}
              className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              onBlur={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              defaultValue={form.message}
              rows="4"
              className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
              onBlur={handleChange}
            ></textarea>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white text-lg"
            disabled={successMessage}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}
