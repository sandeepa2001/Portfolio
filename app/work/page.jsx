"use client"
{/*"use client"
import {motion} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import React,{useState} from 'react'
import "swiper/css";
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects=[
  {
    num:"01",
    category:"frontend",
    title:"project 01",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"}],
    image:"/assets/work/thumb1.png",
    live:"",
    github:""
  },
  {
    num:"02",
    category:"frontend",
    title:"project 02",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"}],
    image:"/assets/work/thumb2.png",
    live:"",
    github:""
  },
  {
    num:"03",
    category:"frontend",
    title:"project 03",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"}],
    image:"/assets/work/thumb3.png",
    live:"",
    github:""
  }
]

export default function page() {
  const[project,setProject]=useState(projects[0]);
  const handleSlideChange=(Swiper)=>{
    const currentIndex= Swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition:{delay:2.4 , duration:0.4, ease:"easeIn"}
       }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white">{project.category} project</h2>
              <p className="text-white/40">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return(
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-3xl text-white group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px]  bg-white/5 flex justify-center items-center group rounded-full">
                      <BsGithub className="text-3xl text-white group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return(<SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"> </div>
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-cover" alt=""/>
                  </div>
                  </div>
                </SwiperSlide>
              )})}
              <WorkSliderBtns containerStyles="absolute right-0 flex gap-2 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
      
    </motion.section>
  )
}
*/}

import {motion} from "framer-motion"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    num: "01",
    category: "Library Management System",
    title: "Project 01",
    description: `A full-stack web and mobile application that handles all the
                  functionality of a library management system. The web application
                  handles inventory management tasks such as book addition,
                  issuing, and returning. The mobile app provides patrons with an
                  intuitive interface for book search, request management, and
                  transaction tracking.`,
    stack: [{ name: "Next.js" }, { name: "ASP.NET Core" }, { name: "MSSQL" }, { name: "Flutter" }, { name: " ANT Design" }],
    images: ["/assets/work/lib1.png", "/assets/work/lib2.png"],
    live: "https://project01-live.com",
    github: "https://github.com/project01"
  },
  {
    num: "02",
    category: " Portfolio Website ",
    title: "Project 02",
    description: " I built this personal portfolio website to showcase my work, skills, and projects. It features a visually appealing, user-friendly design that demonstrates my ability to develop sophisticated web applications.",
    stack: [{ name: "Next JS" }, { name: "Tailwind CSS " }],
    images: ["/assets/work/portfolio1.png", "/assets/work/portfolio2.png","/assets/work/portfolio3.png", "/assets/work/portfolio4.png","/assets/work/portfolio5.png"],
    live: "https://project02-live.com",
    github: "https://github.com/project02"
  },

];

export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" }
      }}
      className="flex flex-col justify-center min-h-screen py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Stack projects one under the other */}
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-12 p-8 mb-12 bg-gray-800 rounded-lg xl:flex-row">
            
            {/* Project Details - Now on the left */}
            <div className="flex flex-col w-full gap-6 xl:w-1/2">
              {/* Project Number */}
              <div className="mb-4 text-6xl font-extrabold text-accent">{project.num}</div>
              
              {/* Project Title and Category */}
              <h2 className="text-[36px] font-bold leading-none text-white mb-4">{project.category}</h2>
              
              {/* Project Description */}
              <p className="mb-4 text-white/80">{project.description}</p>
              
              {/* Stack of Technologies */}
              <ul className="flex flex-wrap gap-4 mb-4">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Links to Live Project and GitHub */}
              {/*<div className="flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>*/}
            </div>

            {/* Project Images - Now on the right */}
            <div className="relative w-full xl:w-1/2 h-[400px] overflow-y-scroll">
              {/* Multiple images displayed with scroll */}
              <div className="flex flex-col gap-4">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative w-full h-[300px]">
                    <Image src={image} fill className="object-cover rounded-lg" alt={`Image ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
