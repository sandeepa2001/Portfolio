"use client";
{
  /*import Image from "next/image";
import "./globals.css";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "./component/Social";
import Photo from "./component/Photo";
import Stats from "./component/Stats";
import Servises from "./services/page";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              Hello I'm <br />
              <span className="text-accent">Kavidu Sandeepa</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            "A quick learner and solution-oriented developer, passionate about full-stack development. I thrive in dynamic environments, embracing challenges with a proactive mindset and leveraging teamwork to achieve seamless collaboration and innovative outcomes."
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                //variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                
                  <span>Download CV </span>
                  <a href="/assets/cv.pdf" download>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="flex items-center justify-center text-base duration-500 border rounded-full  w-9 h-9 border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all"
                />
              </div>
            </div>
          </div>

          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
*/
}
import Image from "next/image";
import "./globals.css";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "./component/Social";
import Photo from "./component/Photo";
import Stats from "./component/Stats";
import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

// TypingEffect Component

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              Hello I&apos;m <br />
              <span className="text-accent">
                <Typewriter
                  words={["Kavidu Sandeepa putha"]}
                  loop={1} // Number of loops (1 means it will type once)
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={150}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
             &quot;A quick learner and solution-oriented developer, passionate about
              full-stack development. I thrive in dynamic environments,
              embracing challenges with a proactive mindset and leveraging
              teamwork to achieve seamless collaboration and innovative
              outcomes.&quot;
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                //variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV </span>
                <a href="/assets/cv.pdf" download>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="flex items-center justify-center text-base duration-500 border rounded-full  w-9 h-9 border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all"
                />
              </div>
            </div>
          </div>

          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
