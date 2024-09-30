"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "UI Design",
    description:
      "I specialize in designing visually captivating and user-friendly interfaces for digital products. My approach emphasizes creating layouts that are both visually appealing and highly intuitive, delivering a seamless and enjoyable user experience. By incorporating modern design principles and leveraging the latest design tools, I strive to boost user satisfaction and engagement through beautifully crafted, functional interfaces.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "I specialize in frontend development, utilizing leading JavaScript frameworks such as React and Next.js. My primary focus is on creating responsive, high-performance web applications that deliver a smooth and seamless user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "I excel in backend development with expertise in Dotnet, Spring Boot, and Node.js. I focus on building robust, scalable, and high-performance server-side applications that ensure seamless functionality and reliability.",
    href: "",
  },
];

export default function Services() {
  return (
    <div className="flex items-center min-h-screen text-white ">
      <section className="container py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0, duration: 0.8, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="p-8 transition-all duration-500 bg-gray-800 rounded-lg shadow-lg group hover:bg-gray-800"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl font-extrabold text-white transition-all duration-300 group-hover:text-accent">
                  {service.num}
                </div>
                <Link href={service.href} passHref>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center shadow-lg group-hover:bg-accent transition-all duration-500"
                  >
                    <BsArrowDownRight className="text-3xl text-primary group-hover:text-white" />
                  </motion.div>
                </Link>
              </div>
              <h2 className="mb-4 text-4xl font-bold transition-all duration-300 group-hover:text-accent">
                {service.title}
              </h2>
              <p className="mb-6 text-white/60">{service.description}</p>
              <div className="w-full h-[2px] bg-white/10 group-hover:bg-accent transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
