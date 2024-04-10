"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion,useAnimationControls,useMotionValueEvent,useScroll  } from "framer-motion";

const Navbar = () => { 

    const controls = useAnimationControls();
    const [isShow,setIsShow] = useState<boolean>(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY,"change",(latest:any)=>{
          const scrollY = latest;

          if(scrollY > 80) {
              controls.set({ opacity:1,transition:{ duration:2 }, y:0 });
          } else {
              controls.set({ opacity:0 });
          }
    })


    return (
        <nav className="bg-title/5 sm:bg-transparent xl:px-10 sm:px-5 py-5">
            <div className="max-w-[1250px] xl:w-full mx-auto flex items-center justify-between">
            <Link href="/">
               <Image src="/static/assets/images/company_logo.png" alt="Hyge" width={100} height={28}/>
            </Link>
            <ul className={
               `transition-all  duration-700 flex xs:w-[70%] xs:gap-y-3 xs:py-10 xs:rounded-none xs:h-screen xs:bg-[#0E0533] z-[9999] lg:items-start lg:fixed lg:top-0 ${isShow ? "lg:left-0":"lg:-left-[100%]"} lg:flex-col items-center py-4 px-8 rounded-full gap-x-12 bg-[#D1E1FF]/10 text-white`
            }>
                <li>
                    <a href="/" className="text-sm hover:text-secondary transition-colors duration-150">Home</a>
                </li>
                <li>
                    <a href="#" className="text-sm hover:text-secondary transition-colors duration-150">Services</a>
                </li>
                <li>
                    <a href="#" className="text-sm hover:text-secondary transition-colors duration-150">WhyUs</a>
                </li>
                <li>
                    <a href="#" className="text-sm hover:text-secondary transition-colors duration-150">OurProcess</a>
                </li>
                <li>
                    <a href="#" className="text-sm hover:text-secondary transition-colors duration-150">OurWork</a>
                </li>
                <li>
                    <a href="#" className="text-sm hover:text-secondary transition-colors duration-150">FAQs</a>
                </li>

                <button onClick={()=>setIsShow(false)} className="text-white xs:block hidden text-xl font-bold absolute top-3 right-5">x</button>
            </ul>
            <button className="xs:hidden bg-[#545968]/10 text-[#F5F5FF]/40 text-sm py-3 px-5 rounded-full cursor-pointer">Let's talk</button>
            <motion.div className="xs:block hidden" initial={{ opacity:0,y:-20 }} animate={controls}>
              <div className="w-[200px] mx-auto flex fixed z-[99] top-6 left-[50%] -translate-x-[50%]  bg-[#0E0533]  rounded-full gap-x-3 items-center p-2">
                    <button onClick={()=> setIsShow(true)} className="flex items-center text-[13px] bg-white/10 rounded-full py-2 px-3 border border-white/10 text-secondary-alt">
                        Menu 
                        <Image src="/static/assets/icons/menu.png" alt="menu" width={24} height={24}/>
                    </button>
                    <button className="flex items-center rounded-full border py-2 px-3 text-[13px] text-white bg-gradient-to-r from-[#1FA4D9]   to-[#3974DC] ">
                        Let's talk 
                    </button>
                </div>
           </motion.div>
            </div>
         </nav>
    )
}

export default Navbar;