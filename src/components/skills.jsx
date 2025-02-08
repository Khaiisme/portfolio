import SkillCard from "./skillcard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "SQL",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

function Skill() {
  return (
    <section className=" max-w-[180vh] mx-auto mt-10">
      <div>
        <h2 className="text-2xl font-extrabold mb-5 mx-2 text-center">
          Wesentliche Werkzeuge, die ich verwende.
        </h2>
        <div className=" justify-center flex flex-wrap gap-3 sm:mx-auto sm:grid sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
