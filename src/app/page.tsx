import {
  PortofolioSection,
  HeroSection
} from '@/components';
import { BookingSection, OurClientSection } from '@/components/home_page';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:'Hyge | Homepage',
  description:'Hyge homepage'
}

const Home = () => {
  return (
      <main className="max-w-[1000px] sm:w-full mx-auto md:px-5 lg:px-10">
         <HeroSection/>
         <PortofolioSection/>
         <OurClientSection/>
         <BookingSection/>
      </main>
  );
}

export default Home;