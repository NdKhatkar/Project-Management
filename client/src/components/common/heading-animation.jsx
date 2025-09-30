import React from "react";
import { motion } from "framer-motion";

export default function HeadingAnimation({ title }) {
  const arrayOfTitle = Array.from(title);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };
  const latterVariants = {
    hidden: { y: 20, opacity: 0, rotate: -6 },
    show: (i) => ({
      y: [0, -4, 2, 0],
      rotate: [0, -8, 7, 0],
      opacity: 1,
      transition: {
        duration: 2.2 + i * 0.03,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };
  return (
    <motion.h1
      className="text-shadow-lg  pointer-events-none select-none flex items-end gap-2 text-yellow-400 mb-8"
      variants={container}
      animate="show"
    >
      {arrayOfTitle.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={latterVariants}
          className="font-extrabold text-4xl leading-none"
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}