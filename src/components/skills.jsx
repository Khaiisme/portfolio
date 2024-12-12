import SkillCard from "./skillcard";

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

function Skill() {
    return ( 
        <section className=" max-w-[180vh] mx-auto mt-10">
            <div>
                <h2 className="text-2xl font-extrabold mb-5">
                Wesentliche Werkzeuge, die ich verwende.
                </h2> 
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"> 
                {skillItem.map(({imgSrc, label, desc }, key )=> <SkillCard imgSrc={imgSrc} label={label} desc={desc}/>)}
                </div>
            </div>
        </section>
     );
}

export default Skill;