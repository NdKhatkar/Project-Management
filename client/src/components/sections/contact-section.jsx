import React, { useRef } from 'react';
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

export default function ContactSection (){

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mqf4c7o",   // Replace with EmailJS Service ID
        "template_3buwu3x",  // Replace with Template ID
        formRef.current,
        "3Pd1-j69CHOjO1Qv6"    // Replace with Public Key
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Try again.");
        }
      );
  };


    const form={
        hidden:{opacity:0,x:1100},
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
    const address={
        hidden:{opacity:0,y:-200},
        show:{
            opacity:1,
            y:0,
            transition:{
                delay:0.5,
                duration:1,
            }
        }
    }
    return (
      <section id="contact" className=" p-8">
        <div className="flex justify-center overflow-hidden rounded-xl p-8 text-white items-center bg-stone-800/50 w-full">
          <motion.div
          variants={form}
            initial='hidden'
            whileInView='show'
            viewport={{amount: 0.3 }}
            className=" w-[50%] bg-white/10 className='bg-white p-2 text-black' rounded-xl p-8"
          >
            <h1 className="font-extrabold text-black text-3xl p-4">Contact Me</h1>
            <div>
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              <input
                className="bg-black p-2 border-none rounded-lg"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <input
                className="bg-black p-2 border-none rounded-lg"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
              <textarea
                className="bg-black p-2 border-none rounded-lg"
                name="message"
                placeholder="Enter Message"
                required
              />
              <button
                className="bg-black w-40 py-2 px-4 font-bold rounded-lg"
                type="submit"
              >
                Send Message
              </button>
            </form>
            </div>
          </motion.div>

          <motion.div 
          variants={address}
          initial='hidden'
          whileInView='show'
          className="flex flex-col justify-center items-start p-8">
            <h1 className="font-extrabold text-2xl py-4">Get In Touch</h1>
            <p>Email : khatkar.nd@gmail.com</p>
            <p>Phone : +91 80593-92477</p>
            <p>
              Address : Fiends Colony Line No.1 and 2 Karnal Road Kaithal
              (136027)
            </p>
          </motion.div>
        </div>
      </section>
    );
}