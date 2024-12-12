import avatar from "./avatar.jpg";

function Hero() {
  return (
    <section id="home" className="flex justify-center items-center bg-gradient text-white h-screen mt-8 ml-14">
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Avatar Image */}
        <div className="flex-shrink-0">
          <figure>
            <img
              src={avatar}
              width={200}
              height={350}
              alt="Avatar"
              className="rounded-lg shadow-lg object-cover"
            />
          </figure>
        </div>

        {/* Hero Text */}
        <div className=" mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="headline-1 text-4xl sm:text-5xl font-bold leading-tight">
            Sofware-Entwickler
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Suche Praktikum in Front-end, Back-end und Cybersecurity
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition">
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
      <p className="absolute top-20 left-10 text-sm ">
        {" "}
        Van Khai, Nguyen <br /> 19 Jahren <br /> Kassel, Germany <br /> +49 1575
        0465498
        <br /> kn579309@gmail.com
      </p>
    </section>
  );
}

export default Hero;
