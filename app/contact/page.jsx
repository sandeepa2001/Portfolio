"use client"
{/*import React from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import {motion} from "framer-motion"

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+94) 740 069 927"
  },
  {
    icon:<FaEnvelope/>,
    title:"Phone",
    description:"(+94) 740 069 927"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Phone",
    description:"(+94) 740 069 927"
  }
]
export default function page() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition:{delay:2.4 , duration:0.4, ease:"easeIn"}
     }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent ">Let's Work together</h3>
            <p className="text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias dignissimos dolor molestiae!
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="firstname" placeholder="Firstname"/>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">UI/UX Design</SelectItem>
                  <SelectItem value="mst">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px]"
            placeholder="Type your msg here."
            />
            <Button size="md" className="max-w-40">
              Send message
            </Button>
          </form>
        </div>
        <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
              return(
                <li className="flex items-center gap-6" key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">{item.icon}</div>
                  <div className='flex-1'>
                    <p className='text-white/60 '>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>

  </motion.section>
  )
}*/}
import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import Email from '../component/Email';


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 740 069 927"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "h.kavidusandeepa@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Moratuwa, Sri Lanka"
  }
]



export default function Page() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pfn8olp', 'template_aa987of', form.current, {
        publicKey: '1KOpfYA2jaXvbVW5A',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    const [selectedService, setSelectedService] = useState("");
  
    const handleServiceChange = (value) => {
      setSelectedService(value);
      console.log("Selected service:", value);
    };
  
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[65%] order-2 xl:order-none">
            {/*<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref={form} onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Reach out to us for collaborations, services, or inquiries.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="text" placeholder="First Name" name="f_name"/>
                <Input type="text" placeholder="Last Name" name="l_name" />
                <Input type="email" placeholder="Email" name="gmail"/>
                <Input type="tel" placeholder="Phone Number" name="phone"/>
              </div>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel >Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here."  name="message"/>
              <Button size="md" className="w-full text-lg" type="submit">
                Send Message
              </Button>
            </form>*/}
            <Email/>
            
          </div>

          {/* Contact Info Section */}
          <div className="flex items-center flex-1 order-1 xl:justify-end xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li className="flex items-center gap-6" key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
