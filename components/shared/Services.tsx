import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { experiences } from "@/constants"; 

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
<AnimatedSection className="mt-20 sm:mt-24 lg:mt-32" >
      <div className="text-center mb-12 sm:mb-16">
        <Image
          src="/images/img_6625065aaabd00c_white_a700_60x60.svg"
          alt="Experience Icon"
          width={60}
          height={60}
          className="w-12 sm:w-15 h-12 sm:h-15 mx-auto mb-4"
        />
       
        <p className="font-medium text-base text-foreground/40 uppercase tracking-wider mb-2">
          EXPERIENCE & TRAINING
        </p>
        
        <h2 className="font-medium text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-tight">
          My Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {experiences.map((item, index) => (
          <div key={index} className="bg-gradient-to-b overflow-hidden from-secondary to-secondary/20 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] rounded-[20px] p-8 sm:p-10 relative hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -right-5 -top-5 z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md"></div>
            
            <Image
              src={item.icon}
              alt={item.title}
              width={60}
              height={60}
              className="w-12 sm:w-15 h-12 sm:h-15 mb-8"
            />
            
            <h3 className="font-medium text-2xl sm:text-3xl text-foreground mb-4">
              {item.title}
            </h3>
            
            <p className="font-normal text-base text-foreground/50 leading-relaxed mb-8">
              {item.description}
            </p>
            
           
            <div className="flex items-center gap-2 mt-auto">
              <span className="font-semibold text-base text-primary">
                {item.date}
              </span>
              <Image
                src="/images/img_6625065aaabd00c_24x24.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-6 h-6 opacity-50"
              />
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
    </section>
    
  );
}