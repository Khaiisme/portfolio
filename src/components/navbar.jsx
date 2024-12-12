import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home'); // Track the active link
  const lastActiveLink = useRef(null); // Reference to the last active link
  const activeBox = useRef(null); // Reference to the active box

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Works', link: '#work' },
    { label: 'Reviews', link: '#reviews' },
  ];

  const activeCurrentLink = (targetElement) => {
    if (!targetElement || !activeBox.current) return; // Ensure the element and activeBox exist

    // Remove the 'active' class from the previous link
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }

    // Add the 'active' class to the clicked or default link
    targetElement.classList.add('active');
    lastActiveLink.current = targetElement;

    // Update the position and size of the active box
    activeBox.current.style.top = targetElement.offsetTop + 'px';
    activeBox.current.style.left = targetElement.offsetLeft + 'px';
    activeBox.current.style.width = targetElement.offsetWidth + 'px';
    activeBox.current.style.height = targetElement.offsetHeight + 'px';

    // Update the active state
    setActive(targetElement.textContent);
  };

  useEffect(() => {
    // Get the default active button (e.g., "Home")
    const defaultActiveButton = document.querySelector('button.active') || document.querySelector('button');

    if (defaultActiveButton) {
      activeCurrentLink(defaultActiveButton);
    }
  }, []); // Runs only once after the component mounts

  const handleButtonClick = (event, link) => {
    activeCurrentLink(event.target);

    // Smooth scroll to the section
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-zinc-700 p-2 rounded-lg select-none">
      {/* Active Box */}
      <div
        ref={activeBox}
        className="absolute bg-white rounded-lg transition-all duration-300"
        style={{ top: 0, left: 0, width: 0, height: 0 }}
      ></div>

      {/* Navigation Links */}
      <nav className="flex space-x-2">
        {navItems.map(({ label, link }) => (
          <button
            key={label}
            onClick={(e) => handleButtonClick(e, link)}
            className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition ${
              active === label
                ? 'text-black active'
                : 'text-gray-400 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
