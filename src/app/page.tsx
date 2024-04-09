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
      <main className="w-full lg:px-10 xs:px-5 lg:px-20 px-52">
         <HeroSection/>
         <PortofolioSection/>
         <OurClientSection/>
         <BookingSection/>
      </main>
  );
}

export default Home;