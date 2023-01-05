import React from 'react'


    const About = () => {
        return (
          <div className="container mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                <img
                  src="/avatar.jpg"
                  alt="Avatar"
                  className="mx-auto rounded-full shadow-lg h-64 w-64"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-2">About Me</h3>
                <p className="text-gray-600 mb-8 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                  porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
                  faucibus arcu condimentum sed.
                </p>
                <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-900 hover:bg-gray-900">
                  Download CV
                </button>
              </div>
            </div>
          </div>
  )
}

export default About