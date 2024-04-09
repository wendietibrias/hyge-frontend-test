import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full  border-top border-white/10 py-10 px-32 z-[999] xs:px-5">
            <div className="grid grid-cols-12  xs:grid-cols-1 xs:gap-y-10">
                <div className="w-[330px] col-span-4 xs:col-span-full">
                  <Image src="/static/assets/images/company_logo.png" alt="Hyge" width={100} height={28}/>
                  <p className="text-[15px] my-6 text-description">
                   Hyge is a Singapore based company that provides customisation and specialisation in website design, development, as well as mobile app development. 
                  </p>
                  <h5 className="flex items-center font-semibold text-description text-sm gap-x-3">
                    <Image src="/static/assets/icons/location.png" width={24} height={24} alt="location icon"/>
                    North Point Bizhub, Singapore.
                  </h5>
                </div>

                <div className=" text-description col-span-2 xs:col-span-full flex flex-col gap-y-5">
                    <div>
                        <p className="text-sm">Email us : </p>
                        <h5 className="font-semibold mt-2">michael@hygeworks.com</h5>
                    </div>
                    <div>
                        <p className="text-sm">Contact us : </p>
                        <h5 className="font-semibold mt-2">+65 8533 3575</h5>
                    </div>
                </div>

                <div className="col-span-6  xs:w-full xs:col-span-full justify-self-end xs:justify-self-start">
                   <div className="w-[250px]  xs:w-full flex flex-col gap-y-5 text-description">
                       <button className="w-full border-b pb-3 border-description flex items-center justify-between">
                         Linkedin
                         <Image src="/static/assets/icons/arrow.png" alt="arrow icon" width={24} height={24}/>
                        </button>
                        <button className="w-full border-b pb-3 border-description flex items-center justify-between">
                         Instagram
                         <Image src="/static/assets/icons/arrow.png" alt="arrow icon" width={24} height={24}/>
                        </button>
                        <button className="w-full border-b pb-3 border-description flex items-center justify-between">
                         Behance
                         <Image src="/static/assets/icons/arrow.png" alt="arrow icon" width={24} height={24}/>
                        </button>
                   </div>
                </div>
            </div>
    
        </footer>
    )
}

export default Footer;