import techStacks from "@/common/constants/project_techs_stack"
import Image from "next/image"
import { ITechStack } from "@/interfaces/tech_stack"
import { PrimaryButton } from "../global"

const ProjectDetailSection = () => {
  return (
    <section className="w-full py-16">
        <h1 className="text-5xl font-bold text-secondary-alt sm:text-[32px]">Levare Decanter</h1>
        <p className="text-[16px] sm:text-[14px] text-description mt-10">
          Through Levare website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.
        </p>

        <div className="py-16 border-b border-white/10">
            <h4 className="text-secondary-alt font-semibold text-xl">Tech Stack</h4>
            <div className="rounded-xl mb-10 mt-7 sm:grid-cols-2 sm:gap-y-5 grid grid-cols-4 gap-x-5 border border-white/10 p-3">
               {techStacks.map((item: ITechStack,idx:number) => (
                  <div className="w-full flex text-description bg-gradient-to-b from-[#000]/0 to-[#fff]/5 items-center p-4 rounded-xl border border-white/10 flex-col" key={idx}>
                     <Image src={item.image} alt={item.title}  width={idx === 0 ? 48 : 70} height={idx=== 0 ? 50 : 95}/>
                     <h4 className="mt-3">{item.title}</h4>
                  </div>
               ))}
            </div>
            <PrimaryButton title="Visit Site"/>
        </div>

        <div className="w-full py-16">
          <h4 className="text-secondary-alt font-semibold text-xl">Description</h4>
          <p className="text-[16px] w-[90%] text-description mt-10">
           Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines. 
          </p>
        </div>

        <div className="w-full sm:py-10 py-12">
          <h4 className="text-secondary-alt font-semibold text-xl">A sneak peak</h4>
           <p className="text-[16px] w-[90%] text-description mt-10">
            Here’s a sneak peek of what we do with Levare:       
          </p>
          <div className="w-full mt-10 relative h-[640px] xs:h-[250px]">
             <Image src="/static/assets/images/project.png" alt="project" layout="fill" className="rounded-xl xs:object-contain object-cover"/>
          </div>
        </div>
        <div className="w-full sm:py-6 py-12">
          <h4 className="text-secondary-alt font-semibold text-xl">Problem statement</h4>
          <p className="text-[16px]  text-description mt-10">
            The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.          
          </p>
        </div>
        <div className="w-full sm:py-6 py-12">
          <h4 className="text-secondary-alt font-semibold text-xl">What We Did</h4>
          <p className="text-[16px]  text-description mt-10">
            By developing a website for Levare Decanter, we aim to address these challenges and provide a platform that offers innovative products and resources to revolutionize the wine drinking experience. Our goal is to create an online destination where wine enthusiasts can access reliable information, discover products that enhance wine aeration, and connect with a community of like-minded individuals passionate about true taste.      
          </p>
       </div>
    </section>
  )
}

export default ProjectDetailSection