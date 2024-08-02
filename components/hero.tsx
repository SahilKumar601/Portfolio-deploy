import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/textGenertor";
import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-35">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 mid:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-20 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight 
            className="-top-30 left-80 h-[80vh] w-[50vh] " 
            fill="blue"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Creating Digital Experiences That Captivate
            </h2>
            <TextGenerateEffect
                className=" text-[40px] md:text-5xl lg:text-6xl text-center text-blue-300 max-w-90"
                words="Transforming Ideas into Seamless User Experience"
             />
            <p className="text-center tracking mb-2 text-lg  text-blue-200">
                Hi there, I&apos;m Sahil Kumar, Full Stack Developer from India 
            </p>
            <a href="#about">
                <Button
                    title="See projects"
                    icon={<FaLocationArrow/>}
                    position="right"
                >
                </Button>
            </a>
        </div>
      </div>
    </>
  );
};
