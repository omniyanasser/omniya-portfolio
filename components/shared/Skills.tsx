import React from 'react';
import Image from 'next/image';
import { skills } from '@/constants';

const Skills: React.FC = () => {
  return (
    
    <section className="mt-20 sm:mt-24 lg:mt-32" id="skills">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className=" font-medium text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-tight">
          My Skills
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
          >
            <div className="group inline-block text-center">
              <div className="size-40 rounded-[20px] bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 border border-zinc-600">
                <div
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10"
                  style={{ boxShadow: 'rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset' }}
                >
                  <Image
                    className="size-24 rounded-xl"
                    alt={skill.name}
                    src={skill.logo}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">{skill.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
