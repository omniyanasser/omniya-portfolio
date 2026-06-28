import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="mt-20 sm:mt-24 lg:mt-32" id="contact">
      <div className="text-center">
        {/* Contact Call to Action */}
        <div className="bg-secondary overflow-hidden relative rounded-t-[20px] p-8 sm:p-12 max-w-4xl mx-auto border border-border/50">
          <div className="absolute h-full w-32 top-0 -left-16 bg-primary/20 blur-[50px]"></div>
          <div className="absolute h-full w-32 top-0 -right-16 bg-primary/20 blur-[50px]"></div>

          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-tight mb-4 relative z-10">
            Let's Connect
          </h2>
          <p className="font-medium text-lg text-foreground/70 mb-8 relative z-10">
            Open to opportunities and collaboration
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 relative z-10">
            <a
              href="mailto:nasserelsayed257@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 px-8 py-4 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Send Email
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="flex flex-col items-center gap-4 text-foreground/80 relative z-10 font-medium">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>10th of Ramadan, Sharqia, Egypt</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+201014009981" className="hover:text-primary transition-colors">+20 101 400 9981</a>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:nasserelsayed257@gmail.com" className="hover:text-primary transition-colors">nasserelsayed257@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="bg-secondary p-6 sm:p-8 border-t border-background">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
            
            {/* Copyright */}
            <p className="font-normal text-sm text-foreground/60">
              © {currentYear} Omniya Nasser Elsayed. All rights reserved.
            </p>

            {/* Social Icons (GitHub & LinkedIn) */}
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/omniyanasser"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground/70"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/omniya-nasser-060584248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground/70"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}