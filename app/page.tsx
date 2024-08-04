import Approach from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/Projects";
import { BackgroundBeams } from "@/components/ui/backgroundBeam";
import { NavBar } from "@/components/ui/Navbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full ">
        <NavBar navItems={navItems}/>
        <Hero/>
        <BackgroundBeams className="h-[75vh]"/>
        <Grid/>
        <Projects/>
        <Approach/>
        <Contact/>
      </div>
      
    </main>
  );
}
