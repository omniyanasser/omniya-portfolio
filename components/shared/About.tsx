import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import Link from "next/link";
import { InfiniteMovingCards } from "../ui/Marquee";

const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
];

export default function About() {
  return (
     <section id="about" className="scroll-mt-24">

       <AnimatedSection className="mt-4" >
      {/* Changed to lg:grid-cols-2 to spread out the content perfectly */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Left Column: About Me & Education */}
        <div className="bg-secondary rounded-[20px] p-6 sm:p-8 flex flex-col justify-between h-full">
          <div>
            <h3 className="font-inter-display font-medium text-2xl sm:text-3xl text-foreground mb-6">
              About Me
            </h3>

            <p className="font-inter-display font-normal text-foreground/80 leading-relaxed mb-8 text-lg">
              I specialize in building responsive, user-friendly web applications using React and modern CSS frameworks. I love turning ideas into beautiful, functional interfaces that users enjoy interacting with.
            </p>
          </div>

          <div className="border-t border-border/50 pt-6 mt-auto">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h4 className="font-inter-display font-medium text-lg text-foreground">
                  B.Sc. Information Technology
                </h4>

                <p className="font-inter-display font-normal text-base text-muted-foreground mt-1">
                  Zagazig University <span className="text-primary mx-2">•</span> Class of 2026
                </p>
              </div>

              {/* GPA Badge */}
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                GPA: 3.7
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stack Icons & IEEE Experience */}
        <div className="flex flex-col gap-6 lg:gap-8 h-full">
          
          {/* Top Card: Social & Contact Grid */}
          <div className="bg-secondary rounded-[20px] p-6 sm:p-8 flex-1 flex flex-col justify-center">
            <h3 className="font-inter-display font-medium text-xl text-foreground mb-6">
              Let's Connect
            </h3>
            
            <div className="grid grid-cols-3 gap-4">
              {/* Email */}
              <Link 
                href="mailto:nasserelsayed257@gmail.com" 
                className="bg-background/50 rounded-[16px] p-4 flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                aria-label="Email Me"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </Link>
              
              {/* GitHub */}
              <Link 
                href="https://github.com/omniyanasser" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-background/50 rounded-[16px] p-4 flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/in/omniya-nasser-060584248" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-background/50 rounded-[16px] p-4 flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Card: IEEE Experience replacing the 2+ years */}
          <div className="bg-secondary rounded-[20px] p-6 sm:p-8 relative overflow-hidden group flex-1 flex flex-col justify-center border border-border/50 hover:border-primary/50 transition-colors">
            <div className="absolute w-1/2 h-20 -bottom-10 right-0 bg-primary/10 blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <h4 className="font-inter-display font-semibold text-2xl text-foreground mb-2">
                IEEE Zagazig
              </h4>
              <p className="text-muted-foreground text-base mb-6">
                Web Master / Front-End Developer
              </p>
              
              <Link 
                href="https://github.com/omniyanasser/IEEE-CS-25" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                <span>View IEEE Repo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Scrolling Tech Stack Marquee */}
      <div className="flex items-center gap-4 sm:gap-8 mt-20">
        <InfiniteMovingCards items={techLogos} direction="right" speed="slow" />
      </div>
    </AnimatedSection>

     </section>
   
  );
}