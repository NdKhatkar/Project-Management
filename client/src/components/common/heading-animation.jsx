import React from "react";
import { motion } from 'motion/react';
import portrait from '../../assets/protrait.jpg';
export default function HeadingAnimation({title}) {

    const arrayofTitle=Array.from(title)
    return(
       <section>
           <div>
                <motion.h1
                   animate={{y: 10}}
                   transition={{duration: 1,
                   repeat:Infinity,
                   repeatType:'reverse',
                   ease: ["easeIn", "easeOut"]}}

               >{arrayofTitle.map((char,index)=><span
                key={index}
                custom={index}
                >{char}</span>)}

               </motion.h1>
               <div className="flex justify-center items-center w-32 h-32">
                   <img src={portrait} alt={''}/>
                   {title}
               </div>
           </div>
       </section>
    )
}