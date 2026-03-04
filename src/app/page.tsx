import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
 return (
 <main className="flex min-h-screen flex-col items-center justify-between w-full">
 <Hero />
 <TechStack />
 <Services />
 <Projects />
 <Process />
 <About />
 <Team />
 <CTA />
 <Contact />
 </main>
 );
}
