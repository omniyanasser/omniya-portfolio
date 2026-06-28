import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-24">
<AnimatedSection className="mt-4">
      <div className="bg-secondary rounded-[20px] p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="relative">
              
              {/* Changed "Where" to "Crafting" based on your CV */}
              <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-foreground">
                Crafting
              </h1>

              <div className="mt-2">
                {/* Changed "Product design meets perfection" to your Front-End role */}
                <h2 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-foreground tracking-tight">
                  Responsive web
                  <br />
                  experiences
                </h2>
              </div>

              {/* The Arrow SVG - Kept exactly as is from the template */}
              <Image
                src="/images/img_6625065aaabd00c.svg"
                alt="Arrow Element"
                width={146}
                height={54}
                className="absolute top-4 right-0 w-24 sm:w-32 md:w-36 h-auto"
              />
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="mt-4 sm:mt-6 lg:mt-8 text-xl rounded-full px-8 py-6"
              size={"lg"}
            >
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="w-full lg:w-1/2 flex gap-4 sm:gap-6">
            <Image
              src="https://assets.lummi.ai/assets/QmTunJ2TWiD8AJLaRP39H4avT97zBZKyHVjKxXb9LXxWqL?auto=format&w=1500"
              alt="Omniya Nasser - Front-End Developer"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
          
        </div>
      </div>
    </AnimatedSection>
    </section>
    
  );
}