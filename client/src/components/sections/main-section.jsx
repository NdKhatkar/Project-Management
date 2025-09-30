import HeadingAnimation from "../common/heading-animation";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar 1.png";

export default function Section1() {
  return (
    <section id="home" classname="w-full overflow-hidden">
      <div className="container pt-30 px-6 mx-auto flex flex-col items-center justify-center">
        <HeadingAnimation title={"Hope You Will Like My Portfolio..."} />
        <motion.div
          initial={{
            opacity: 0,
            scale: 5,
          }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="h-150 flex flex-col px-12 py-12 p items-center gap-4 rounded-xl bg-yellow-500"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 3,
            }}
            animate={{ scale: 1, opacity: 1,rotate:360 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col rounded-xl justify-between items-center bg-yellow-400 shadow-lg shadow-yellow-800/50 h-120  w-120"
          >
            <h1 className="text-black mt-24 font-bold text-2xl">
              I’m glad you’re here.”
            </h1>
            <img className="" src={avatar} alt={""} />
          </motion.div>
          <h1 className="font-extrabold text-3xl">Narender Singh Khatkar</h1>
          <h1 className="font-semibold text-xl">UI / UX Frontend Developer</h1>
        </motion.div>
      </div>
    </section>
  );
}
