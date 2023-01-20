import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Button } from "flowbite-react";
import Image from "next/image";
import Signature from "../resources/assinatura_colorida2.0.png"

const NavbarFlow = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  let [open,setOpen]=useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("Home");
    if (pathname === "/about-me") setActiveItem("About Me");
    if (pathname === "/working-experience") setActiveItem("Working Experience");
    if (pathname === "/education") setActiveItem("Education");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/fun-facts") setActiveItem("Fun Facts");
  }, [pathname]);

  console.log("pathname", pathname);
  console.log(activeItem);
  console.log(pathname === "/");

 let Links = [
   {name: "Home", link:"/"},
   {name: "About Me", link: "/about-me"},
   {name: "Working Experience", link: "/working-experience"},
   {name: "Education", link: "/education"},
   {name: "Projects", link: "/projects"}
 ]

  const active = (name: String) => {
    return activeItem === name ? true : false;
  };

  return (
      <div className=' w-full fixed top-0 left-0 z-10'>
          <div className='flex md:flex items-center bg-background-dark py-5 md:px-10 px-7'>
              <div className='font-bold font-roboto text-2xl cursor-pointer h-12 items-center flex text-gray-500'>
                 <span className=' w-16 text-gray-500'>
                     <Image src={Signature}></Image>
                 </span>
              </div>

              <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
                  <div>test</div>
              </div>

              <ul className={`grow md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0
               w-full md:w-auto items-center transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} mr-`}>
                  <div className={"flex flex-row grow justify-center"}>
                      {
                          Links.map((link)=>(
                              <li key={link.name} className='text-1xl md:my-0 my-7'>
                                  <div className={`flex flex-row items-center`}>
                                      <a href={link.link} className='font-roboto font-bold text-gray-500 hover:text-white duration-500 mx-3'>{link.name}</a>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                      </svg>
                                  </div>
                              </li>
                          ))
                      }
                  </div>
                  <div className={`flex md:justify-end`}>
                      <Button className={`bg-transparent border border-gray-600 hover:bg-gray-800`}>
                          <p>Contact me</p>
                      </Button>
                  </div>
              </ul>
          </div>
      </div>
  );
};

export default NavbarFlow;
