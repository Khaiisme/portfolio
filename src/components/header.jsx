import Navbar from "./navbar";
const Header = ({ opacity }) => {
  return (
    <header
      className="fixed top-0 w-full mx-1 bg-transparent text-white transition-opacity duration-500 "
      style={{ opacity }}
    >
      <nav className="max-w px-10 py-4 flex items-center justify-between ">
        <div>
          <button
            className="bg-white text-black text-sm font-bold px-4 py-2 rounded-md shadow hover:bg-gray-200 transition ml-52 sm:ml-auto"
            onClick={() =>
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
        {/* Navigation Links */}
        <Navbar />
        {/* Contact Me Button */}
        <div className="hidden md:block"></div>
      </nav>
    </header>
  );
};

export default Header;
