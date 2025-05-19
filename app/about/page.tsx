"use client";

import TitleComponent from "@/components/TitleComponent";
import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//     title: 'About'
// }

const About = () => {
  return (
    <main className="my-14 space-y-5 p-4 max-w-6xl lg:p-2 mx-auto">
      <TitleComponent title={"About"} />
      <section className="grid grid-cols-12 gap-5 w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 md:col-span-7"
        >
          <Image
            src={"/banner.jpg"}
            alt="Cromax mockup"
            className="object-cover w-full saturate-0 hover:scale-105 brightness-90 duration-300 ease-in-out rounded-md"
            width={500}
            height={500}
            quality={70}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 md:col-span-5 space-y-4 pl-4"
        >
          <h2 className="text-white text-2xl md:text-4xl capitalize">
            my mission
          </h2>
          <p className=" text-white/45 leading-7">
            To capture the soul of every moment and preserve it in timeless
            frames. Through my lens, I strive to tell authentic stories—stories
            of people, places, emotions, and cultures. Whether it's a quiet
            glance, a bustling street, or a powerful movement, my mission is to
            document life as it unfolds—with honesty, creativity, and purpose.
          </p>
          <p className=" text-white/45 leading-7">
            Every photograph is more than an image; it’s a memory, a message,
            and a legacy. I aim to create visuals that not only speak but also
            connect—reminding us of who we are, what we value, and the beauty
            found in the everyday.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
