import { projects } from "@/data"
import { PinContainer } from "./ui/3dPin"
import { FaLocationArrow } from "react-icons/fa"
import { FaLink } from "react-icons/fa";

export const Projects = () => {
  return (
    <div id="projects" className="py-20">
        <h1 className="heading text-white">
            A small section of {' '}
            <span className="text-purple">recent projects</span>
        </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map((pr)=>(
                    <div key={pr.id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                      <PinContainer title={pr.link} href={pr.link} >
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]
                         mb-10">
                          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                            <img src="/bg.png" alt="bg" />
                          </div>
                          <img src={pr.img} alt='img' className="z-10 absolute bottom-0"/>
                        </div>
                        <h1 className="text-white font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                          {pr.title}
                        </h1>
                        <p className="lg:text-xl text-white-200 lg:font-normal font-light text-sm line-clamp-2">
                          {pr.des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                          <div className="flex items-center">
                              {pr.iconLists.map((icon,index)=>(
                                <div key={icon} className=" border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform:`translateX(-${5*index*2}px)`}}>
                                    <img src={icon} alt={icon} className="p-2" />
                                </div>
                              ))}
                          </div>
                          <div className="flex justify-center items-center">
                              <p className="flex lg:text-xl md:text-xs text-sm text-purple">Link</p>
                              <FaLink className="ms-3 mr-4" color="00FFFF"/>
                          </div>
                        </div>
                      </PinContainer>
                    </div>
                ))}
            </div>
    </div>
  )
}
