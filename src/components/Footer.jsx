import React from 'react';


const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex items-center md:justify-between justify-center">
        <div className="w-full md:w-4/5 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Stay up to date with the latest news and projects</h3>
          <p className="mt-4 text-gray-400 text-sm">
            Subscribe to our newsletter to receive updates on new projects and important announcements.
          </p>
        </div>
        <div className="w-full md:w-2/5 mt-2 md:mt-0">
          <form className="flex flex-col md:flex-row justify-center md:justify-start">
            <input type="email" placeholder="Enter your email" className="rounded-full px-4 py-2 mr-2 border-2 border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500" />
            <button type="submit" className="px-4 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 focus:outline-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 md:flex md:justify-between md:items-center">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
        <div className="md:flex md:items-center">
          <a href="#" className="text-gray-400 hover:text-gray-300 mr-4 text-sm">
            FAQ
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mr-4 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mr-4 text-sm">
            Terms of Use
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;