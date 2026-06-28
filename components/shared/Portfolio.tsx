"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { portfolioProjects } from "@/constants";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Portfolio() {
  
  const [showAll, setShowAll] = useState(false);
  
  
  const displayedProjects = showAll ? portfolioProjects : portfolioProjects.slice(0, 6);

  return (
    <section id="projects" className="scroll-mt-24">
<AnimatedSection className="mt-20 sm:mt-24 lg:mt-32">
      <div className="text-center mb-12 sm:mb-16">
        <Image
          src="/images/img_6625065aaabd00c_white_a700_60x56.svg"
          alt="Portfolio Icon"
          width={56}
          height={60}
          className="w-12 sm:w-14 h-12 sm:h-15 mx-auto mb-4"
        />
        <p className="font-medium text-base text-foreground/40 uppercase tracking-wider mb-2">
          PORTFOLIO SECTION
        </p>
        <h2 className="font-medium text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-tight">
          Product design showcase
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-[20px] p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg flex flex-col group"
          >
            <div className="flex justify-between items-start mb-6 gap-4">
              <div>
                <Button variant="secondary" size="sm" className="mb-4 text-primary bg-primary/10 hover:bg-primary/20 cursor-default">
                  {project.category}
                </Button>
                <h3 className="font-semibold text-2xl sm:text-3xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-2.5 py-1 rounded-md bg-background/50 text-foreground/70 border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Icon (Turns Orange on Hover) */}
              <Link
                href={project.link}
                target="_blank"
                className="shrink-0 p-3 bg-background rounded-full transition-colors group-hover:bg-background/80"
                aria-label={`View ${project.title} live`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-foreground transition-colors duration-300 hover:text-orange-500"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Project Image Link */}
            <Link href={project.link} target="_blank" className="block mt-auto overflow-hidden rounded-[16px]">
              <Image
                src={project.image}
                alt={project.title}
                width={536}
                height={390}
                
                className="w-full h-[250px] object-cover object-top transform hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-12 sm:mt-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block bg-primary text-primary-foreground font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg px-8 py-4 text-lg cursor-pointer"
        >
          {showAll ? "Show Less" : "See All Projects"}
        </button>
      </div>
    </AnimatedSection>
    </section>
    
  );
}