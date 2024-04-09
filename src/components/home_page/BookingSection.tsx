

const BookingSection = () => {
  return (
     <section className="w-full py-16  text-center h-[90vh] xs:h-full relative  overflow-y-hidden overflow-x-hidden xs:mt-0">
        <div className="w-full mt-32 xs:mt-0">
          <h1 className="text-5xl xs:text-4xl font-bold text-white tracking-wide">We can help to improve your bussiness <span className="text-secondary mt-3 block">by upgrading your technology!</span></h1>
          <p className="text-description text-[18px] mt-10 mb-8">Schedule a free 30 mins call with us</p>
          <button className="py-4 px-8 rounded-full cursor-pointer bg-secondary text-white text-sm">
            Book an appointment
          </button> 
        </div>

         <img src="/static/assets/background/pseudo.png" className="absolute lg:hidden  top-0 left-[55%]  -translate-x-[50%]" alt="pseudo-1"/>
         <img src="/static/assets/background/pseudo3.png" className="absolute lg:hidden top-[210px] left-[45%] -translate-x-[50%]" alt="pseudo-1"/>
         <img src="/static/assets/background/pseudo2.png" className="absolute lg:hidden top-[390px] xs:top-[300px] left-[55%] -translate-x-[55%]" alt="pseudo-1"/>
         

     </section>
  )
}

export default BookingSection