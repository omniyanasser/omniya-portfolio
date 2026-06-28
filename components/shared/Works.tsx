import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { workHistory } from "@/constants";

export default function Works() {
  return (
    <AnimatedSection className="mt-20 sm:mt-24 lg:mt-32">
      <div className="text-center mb-12 sm:mb-16">
        <Image
          src="/images/img_6625065aaabd00c_white_a700_62x60.svg"
          alt="History Icon"
          width={60}
          height={62}
          className="w-12 sm:w-15 h-12 sm:h-15 mx-auto mb-4"
        />
        <p className=" font-medium text-base text-foreground/40 uppercase tracking-wider mb-2">
          HISTORY SECTION
        </p>
        <h2 className=" font-medium text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-tight">
          History the work
        </h2>
      </div>
      <div className="bg-secondary rounded-[20px] p-8 sm:p-10">
        <div className="space-y-6">
          {workHistory.map((work, index) => (
            <div
              key={index}
              className="bg-background/20 relative overflow-hidden hover:bg-background/50 transition-all duration-500 ease-in-out rounded-[16px] p-6 sm:p-8"
            >
              <div className="absolute w-full h-16 -top-20 left-0 bg-primary/10 blur-2xl"></div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="lg:w-1/4">
                  <p className=" font-normal text-base text-foreground mb-2">
                    {work.period}
                  </p>
                  <h3 className=" font-medium text-3xl sm:text-4xl text-foreground">
                    {work.title}
                  </h3>
                </div>
                <div className="lg:w-3/4 border-l border-[#ffffff0c] pl-6 lg:pl-8">
                  <h4 className=" font-medium text-3xl sm:text-4xl text-foreground mb-4">
                    {work.role}
                  </h4>
                  <p className=" font-normal text-base text-foreground/40 leading-6">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
