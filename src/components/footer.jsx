import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} . All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mx-3"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mx-3"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mx-3"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
