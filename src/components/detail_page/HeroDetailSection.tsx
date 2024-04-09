import Image from "next/image"
import { GradientButton } from "../global"


const HeroDetailSection = () => {
  return (
    <section className="w-full pb-10 mt-10">
        <div className="w-full relative h-[550px] sm:h-[200px]">
           <Image src="/static/assets/images/detail-image.png" alt="portfolio-1" fill className="rounded-xl object-cover sm:object-contain"/>
        </div>
        <div className="mt-10 flex items-center gap-x-12 sm:flex-col sm:items-start sm:gap-y-7">
            <h4 className="text-secondary-alt text-2xl font-bold">Our Role </h4>
            <div className="flex items-center gap-x-3">
              <GradientButton title="Web Development"/>
              <GradientButton title="UI Design"/>
            </div>
        </div>
    </section>
  )
}

export default HeroDetailSection