import { Grid } from "@/components/Grid";
import { Hero } from "@/components/hero";
import { BackgroundBeams } from "@/components/ui/backgroundBeam";
import { NavBar } from "@/components/ui/Navbar";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className='relative bg-black-100  flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full ">
        <NavBar navItems={[{name:'Home',link:'/',icon:<FaHome/>}]}/>
        <Hero/>
        <Grid/>
      </div>
      
    </main>
  );
}
