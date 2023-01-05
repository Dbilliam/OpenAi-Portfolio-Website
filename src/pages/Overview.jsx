import React from 'react'
import pic from '../assets/hero.png'

const Overview = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm Tillia Max
        </h1>
        <p className="text-[#3984da] text-lg mb-4">

        My name is Tillia Max and I am a Blockchain developer. <br/>I have a passion for building web applications and
          always strive to learn new technologies. On this website, you will find a collection of my projects and
          information about me.
          <br/>
          </p>
          <p className='text-white py-[50px] font-bold'>
          I am working on Blockchain And Cyber Security and I don't have any prior knowledge in computer education but I am studying so hard in computer programing and I loved computer programing and new technology.
I have knowledge of Java, C++, JavaScript, HTML, CSS, SQL, React, React-Native, Nodejs, Express, MongoDB, Cyber Security, BlockChain, Ethersjs, and Solidity.
        </p>
        <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-900 hover:bg-gray-900">
          View My Work
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={pic}
          alt="Placeholder"
          className="rounded-lg shadow-md w-[500px] h-[550px] float-right"
        />
      </div>
    </div>
  </div>
  )
}

export default Overview