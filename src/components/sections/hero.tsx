import React from 'react';
import Image from 'next/image';
import { BsChat, BsFileEarmark, BsChevronDown } from 'react-icons/bs';
import { Button } from '@/components/ui';
import { GridBackground } from '@/components/grid';

const Hero = () => {
  const SHOW_RESUME_BTN = process.env.SHOW_RESUME_BTN?.toLowerCase() === 'true';

  return (
    <section
      id="about"
      className="hero-section min-h-[84vh] lg:min-h-screen flex flex-col justify-center items-center relative"
    >
      <GridBackground />
      <div className="container text-center">
        <div className="hero-info-container 2xl:pt-20">
          <Image
            src="/images/hero-avatar.webp"
            width={400}
            height={400}
            alt="A woman with long black hair wearing a white top."
            className="w-auto h-40 lg:h-44 2xl:h-52 mb-6 2xl:mb-10 mx-auto "
            loading="eager"
          />

          <h1 className="text-purple-100 mb-5 md:mb-7">Alliyah Joyce Sarip</h1>

          <p className="max-w-[400px] 2xl:max-w-[450px] mx-auto 2xl:text-lg">
            A <span className="font-bold">Software Developer</span> specializing
            in building full-stack web applications using the MERN Stack.
          </p>
        </div>
        <div className="mt-6 flex justify-center space-x-2 md:space-x-4 md:max-w-[640px] mx-auto">
          <Button
            text="Get in Touch"
            url="#contact"
            filled={!SHOW_RESUME_BTN}
            icon={<BsChat />}
            iconPosition="left"
          />
          {SHOW_RESUME_BTN && (
            <Button
              text="Resume"
              url="#"
              icon={<BsFileEarmark />}
              iconPosition="left"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
