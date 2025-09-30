import react from "react";
import { useState} from "react";
import { motion } from "framer-motion";
import Alarm from "../../assets/alarm.png";
import imdb from "../../assets/IMDb Clone.png";
import portfolio from "../../assets/portfolio.png";

const works = [
  {
    id: 1,
    category: "clone",
    title: "IMDb Clone",
    img: `${imdb}`,
    description:
      "An IMDb clone built with vanilla JavaScript in my early coding journey. It integrates the TMDb API to fetch and display movie details, giving me hands-on experience with APIs, dynamic rendering, and building interactive web apps from scratch.",
    link: "https://im-db-clone-bay.vercel.app/",
  },
  {
    id: 2,
    category: "gadget",
    title: "Alarm Clock",
    img: `${Alarm}`,
    description:
      "A simple alarm clock built with vanilla JavaScript, one of my first projects from years ago. It helped me practice DOM manipulation, event handling, and working with time in JavaScript.",
    link: "https://alarm-project2-5wyu.vercel.app/",
  },
  {
    id: 3,
    category: "portfolio",
    title: "My Portfolio",
    img: `${portfolio}`,
    description:
      "A responsive portfolio built with React and Tailwind CSS, showcasing my projects and skills with a clean, modern design.",
    link: "",
  },
  
];

export default function WorkSection() {
  const [position, setPosition] = useState(1);

  const card=(index)=>({
    hidden:{
        opacity:0,
        x: index%3 == 1 ? -400 : index%3 == 0 ? 200 : 0,
        y: index%3 == 2 ? 200 : 0,
    },
    show:{
        opacity:1, 
        x:0,
        y:0,
        transition:{
            duration:0.5,
          delay:0.5
        }
    }
  })

  return (
    <section
      id="work"
      className="flex flex-col justify-between bg-linear-to-b from-stone-800/70 via-black to-stone-800/70 text-white rounded-xl items-center m-8 p-8"
    >
      <div className="">
        <h1 className="py-8 font-extrabold text-3xl">My Works</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {works?.map((work, index) => {
          return (
            <motion.div
              variants={card(index+1)}
              initial='hidden'
              whileInView='show'
              key={index+1}
              className=" w-[100%] flex flex-col bg-linear-to-b from-stone-800 to-black  justify-between items-center gap-4 p-8 rounded-xl"
            >
              <h1 className=" font-extrabold text-xl">{work?.title}</h1>
              <img className="w-80 h-40" src={work?.img} alt={work?.title} />
              <span className="w-80 h-40">{work?.description}</span>
              <a href={work?.link}>
                {" "}
                <div className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-bold cursor-pointer">
                  Visit{" "}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
