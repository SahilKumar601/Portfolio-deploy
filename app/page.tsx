import Approach from "@/components/Approach";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/Projects";
import { BackgroundBeams } from "@/components/ui/backgroundBeam";
import { NavBar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import {Toaster} from 'sonner'


export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip'>
      <div className="max-w-7xl w-full ">
        <NavBar navItems={navItems}/>
        <Hero/>
        <BackgroundBeams className="h-[75vh]"/>
        <Grid/>
        <Projects/>
        <Approach />
        <Contact/>
        <Footer/>
        <Toaster richColors expand={true} position="bottom-right"/>
      </div>
      
    </main>
  );
}
