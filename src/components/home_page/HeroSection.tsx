import services from "@/common/constants/services";
import { VektorLine } from "../global";

const HeroSection = () => {
    return (
        <section className="sm:w-full mt-16 mb-10  max-w-[650px] relative">
            <VektorLine path="/static/assets/background/vector 24.png" alt="vektor line" style="absolute top-6 h-[80%] -left-20"/>
            <VektorLine path="/static/assets/background/vector 25.png" alt="vektor line" style="absolute -top-6 -right-80 xl:hidden"/>
            <h1 className="text-5xl sm:text-[32px] font-bold text-white">Our <span className="text-secondary">Portfolio</span></h1>
            <p className="text-description text-[18px]  sm:text-[14px] sm:mt-6 mt-8 mb-10">As your digital partner, we collaborate with you to drive innovation, stay ahead of the curve, and deliver real impact for your business.</p>
            <div className="w-full sm:overflow-x-scroll whitespace-nowrap space-x-5">
                {
                   services.map(
                      (item:{  title:string }, idx:number) => (
                         <button key={idx} className={`max-w-max inline-block ${idx === 0 ? "bg-secondary" : "bg-secondary-alt/10"} hover:bg-secondary transition-all py-2 px-4 rounded-full text-white text-[12px] border border-white/5`}>
                            {item.title}
                         </button>
                      )
                   )
                }
            </div>
        </section>
    )
}

export default HeroSection;