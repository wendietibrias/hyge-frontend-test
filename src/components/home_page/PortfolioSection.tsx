"use client"

import portfolios from "@/common/constants/portfolios"
import Image from "next/image"
import Link from "next/link"
import { IPortfolioResponse } from "@/interfaces/portoflios_response"
import { GradientButton } from "../global"
import { motion } from "framer-motion"


const PortofolioSection = () => {
    return (
        <section className="w-full pb-10">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
                {portfolios.map((item:IPortfolioResponse,idx:number) => (
                      <motion.div
                         key={idx}
                         initial="hidden"
                         whileInView="visible"
                         variants={{
                          visible: {
                            opacity: 1,
                            transition: { duration: 1.5 },
                            x: 0,
                          },
                          hidden: {
                            opacity: 0,
                            x:idx % 2 == 0 ? -150 : 150,
                          },
                        }}
                      >
                       <Link href={`/${item.title}`}>
                          <div className="w-full border rounded-xl p-3 border-solid border-white/10">
                          <div className="w-full h-[300px] relative">
                            <Image src={item.image} alt={item.title} fill className="object-cover rounded-xl"/>
                          </div>
                          <div className="w-full">
                                <div className="w-full  mt-5 rounded-xl border border-solid p-4 bg-gradient-to-b from-[#000]/0 to-[#fff]/5 border-white/10 text-title-alt">
                                <div className="flex gap-x-3 items-center">
                                  {item.categories.map((item:{ title:string },idx:number) => <GradientButton key={idx} title={item.title}/>)}
                                </div>
                                  <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
                                  <p className="text-description line-clamp-3 text-sm pr-10 sm:pr-0  overflow-hidden text-ellipsis">{item.description}</p>
                                </div>
                          </div>
                        </div>
                      </Link>
                      </motion.div>
                ))}
            </div>
            <button className="rounded-full bg-secondary-alt/30 text-[13px] text-white py-3 px-5 mt-10">LoadMore</button>
        </section>
    )
}

export default PortofolioSection