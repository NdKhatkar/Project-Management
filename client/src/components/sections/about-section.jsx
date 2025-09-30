import sticker from "../../assets/sticker.png"
import {easeInOut, motion}from 'framer-motion'

export default function About() {

  const avatar={
        hidden:{opacity:0,x:-1000},
        show:{
            
              x: 0,
              opacity: 1,
              backgroundColor: "#facc15", // yellow-400
            
            transition:{
              type: "spring",
              stiffness: 50, // controls tightness
              damping: 5,
              bounce: 0.5,
              duration: 3,
              delay:0.25,
            }
        
    }}

    const cards={
      circleMotion:{x:[0,10,20,10,0],
        y:[0,0,10,10,0],
        transition:{
          repeat:Infinity,
          duration:6,
          ease:easeInOut
        }
      }
     }
  return (
    <section id="about" className="p-8">
      <div className="container mx-auto flex p-8 justify-between w-full rounded-xl bg-stone-800/50  text-white">
        <div className="w-[50%] text-xl">
          <div className="">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p>
              I’m a React developer with six months of hands-on experience as a
              trainee at Tech Superior Consulting. My journey in tech started
              early—I’ve always been fascinated by how things work and driven by
              curiosity for gadgets and software. I hold a Bachelor’s degree in
              Computer Applications (BCA), which gave me a strong foundation to
              grow my skills in modern web development.
              <br></br>
              <br></br>
              Outside of coding, I’m a national-level badminton player and a
              huge movie enthusiast. I believe the discipline and focus I’ve
              learned from sports, combined with my passion for technology,
              shape the way I approach problem-solving and continuous learning
              as a developer.
            </p>
          </div>
          <div className="py-8 flex items-center justify-start gap-16">
            <motion.div variants={cards} whileInView='circleMotion' className="bg-yellow-400 p-4 w-40 h-30 rounded-xl text-black">
              <h3 className="font-extrabold">5+</h3>
              <p>Projects</p>
            </motion.div>
            <motion.div variants={cards} whileInView='circleMotion' className="bg-yellow-400 p-4 w-50 h-30 rounded-xl text-black">
              <h3 className="font-extrabold">6+</h3>
              <p>Months Experience</p>
            </motion.div>
          </div>
        </div>
        <div className="p-8">
            <motion.div variants={avatar}
            initial='hidden'
            whileInView='show'
            viewport={{amount: 0.3 }} className="rounded-4xl  w-100 overflow-hidden">
            <img src={sticker} alt=''></img>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
