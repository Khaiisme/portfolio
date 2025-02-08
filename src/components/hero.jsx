import avatar from "./avatar.jpg";

function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv.pdf"; // Ensure cv.pdf is in the public folder
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="home"
      className="flex justify-center items-center bg-gradient text-white h-screen mt-3 sm:mt-14 mx-2"
    >
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Avatar Image */}
        <div className="flex-shrink-0">
          <figure>
            <img
              src={avatar}
              width={200}
              height={350}
              alt="Avatar"
              className="rounded-full shadow-lg object-cover"
            />
          </figure>
        </div>

        {/* Hero Text */}
        <div className=" mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white bg-gradient-to-r from-[#000000] to-transparent bg-clip-text">
            Sofware-Entwickler
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Suche Praktikum in Front-end, Back-end und Cybersecurity
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition"
              onClick={downloadCV}
            >
              Download CV
            </button>

            <button
              className="mt-2 sm:mt-0 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg shadow transition"
              onClick={() =>
                document
                  .querySelector("#about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Scroll Down ↓
            </button>
          </div>
        </div>
      </div>
      <p className="absolute top-20 left-10 text-sm hidden md:block">
        {" "}
        Van Khai, Nguyen <br /> 19 Jahren <br /> Kassel, Germany <br /> +49 1575
        0465498
        <br /> kn579309@gmail.com
      </p>
    </section>
  );
}

export default Hero;
