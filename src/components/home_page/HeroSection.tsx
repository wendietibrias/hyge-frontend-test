import services from "@/common/constants/services";

const HeroSection = () => {
    return (
        <section className="w-full py-16 xs:pt-16 xs:pb-10 max-w-[650px]">
            <h1 className="text-5xl xs:text-[32px] font-bold text-white">Our <span className="text-secondary">Portfolio</span></h1>
            <p className="text-description text-[18px]  xs:text-[14px] xs:mt-6 mt-10 mb-8">As your digital partner, we collaborate with you to drive innovation, stay ahead of the curve, and deliver real impact for your business.</p>
            <div className="w-full  xs:overflow-x-scroll whitespace-nowrap space-x-3">
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