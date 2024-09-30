"use client";
import Image from "next/image";
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDotnet } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const about = {
  title: "About me",
  description: "I'm an undergraduate IT student passionate about technology and software engineering, with a strong foundation in programming.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kavidu Sandeepa",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 740 069 927",
    },
    {
      fieldName: "Age",
      fieldValue: "23 years",
    },
    {
      fieldName: "Email",
      fieldValue: "h.kavidusandeepa@gmail.com",
    },
    
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    
    {
      fieldName: "Language",
      fieldValue: "English , Sinhala",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "",
  items: [
    {
      company: "University of Moratuwa ",
      position: "BSc (Hons) in Information Technology",
      duration: "2022 - Present",
    },
    {
      company: "Matara Rahula College",
      position: "Advanced Level(Maths) AAA",
      duration: "2018 - 2020",
    },
    
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skilllist: [
    {
      icon: "/assets/skills/react.svg",
      name: "React Js",
    },
    {
      icon: "/assets/skills/nextjs.svg",
      name: "Next Js",
    },{
      icon: "/assets/skills/html.svg",
      name: "HTML",
    },
    {
      icon: "/assets/skills/css.svg",
      name: "CSS",
    },
    {
      icon: "/assets/skills/tailwind.svg",
      name: "Tailwind",
    },
    {
      icon: "/assets/skills/java.svg",
      name: "Java",
    },
    {
      icon: "/assets/skills/python.svg",
      name: "Python",
    },
    {
      icon: "/assets/skills/dotnet.svg",
      name: "Dot Net",
    },
    {
      icon: "/assets/skills/springboot.svg",
      name: "Spring Boot",
    },
    {
      icon: "/assets/skills/mysql.svg",
      name: "MySql",
    },
    {
      icon: "/assets/skills/mssql.svg",
      name: "MsSql",
    },
  ],
};

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/*<TabsTrigger value="experience">Experience</TabsTrigger>*/}
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/*<TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[64px] h-[64px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>*/}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[270px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px] ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-5 md:grid-cols-4 xl:gap-[30px]">
                {skills.skilllist.map((skill,index)=>{
                  return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[100px]  bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              <Image src={skill.icon} alt=""  className="w-24 h-24" width={96} height={96}/>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize"> {skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
                
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-8">
                  {about.info.map((item,index)=>{
                    return(
                      <li className="flex items-center justify-center gap-4 xl:justify-start" key={index}>
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
