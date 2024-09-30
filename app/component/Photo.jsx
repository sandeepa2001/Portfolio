"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*Image*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[288px] xl:w-[443px] xl:h-[444px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/image.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] h-[300px] xl:w-[450px] xl:h-[465px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r={245}
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0 "}}
            animate={{
              strokeDasharray: ["15 120 25 25 ", "16 25 92 72 ", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
                duration:20,
                repeat:Infinity,
                repeatType:"reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
