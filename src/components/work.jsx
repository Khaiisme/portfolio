const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  
];
function Work() {
  return (
    <section id="work">
      <div>
        <h2 className="text-2xl font-extrabold mt-20 mx-auto text-center ">
          Meine Portfolio Works
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        {works.map(({ imgSrc, title, tags, projectLink }, key) => (
          <div
            key={key}
            className="bg-zinc-800 rounded-lg shadow-md transition-transform duration-300 p-4"
          >
            <figure className="rounded-lg">
              <img
                src={imgSrc}
                alt={title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div className="flex flex-wrap mt-2 gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-2 py-1 bg-blue-100 text-zinc-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-400 font-bold hover:text-white "
                >
                  Github
                  <img
                    src="/images/github.png" // Path to the GitHub icon in the public folder
                    alt="GitHub Icon"
                    className="w-12 h-12 p-1 rounded-full  transition duration-300"
                  />
                </a>
                <a
                  href={projectLink}
                  target="_blank"
                  rel="no opener noreferrer"
                  className="flex items-center gap-2 font-bold text-blue-500 hover:text-white"
                >
                  View Site
                  <span
                    className="material-symbols-rounded bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
