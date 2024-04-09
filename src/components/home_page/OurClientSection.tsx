
import clients from '@/common/constants/clients'

const OurClientSection = () => {
  return (
    <section className='w-full py-10 relative'>
        <h1 className="text-5xl font-bold text-white">Our <span className="text-secondary">Client</span></h1>
        <p className="text-description text-[18px] xs:text-[14px] xs:pr-7 mt-6 mb-10">Here are just few of the clients we’ve had the privilege to serve:</p>

        <div className='mt-16 flex flex-wrap gap-5'>
            {clients.map((item:{image:string},idx:number)=>(
                 <img src={item.image} alt={item.image} key={idx} className='object-cover'/>
            ))}
        </div>

    </section>
  )
}

export default OurClientSection