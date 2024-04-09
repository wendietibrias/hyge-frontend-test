import Image from "next/image";
import Link from "next/link";
import {
    HeroDetailSection,
    ProjectDetailSection
} from '@/components';
import { BookingSection } from "@/components/home_page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Hyge | Detail',
    description:'hyge portofolio detail'
}

const Detail = () => {
    return (
        <main className="w-full lg:px-10  px-52 xs:px-5 pt-10">
            <Link href="/" className="flex text-description text-sm items-center gap-x-3">
                <Image src="/static/assets/icons/arrow-back.png" alt="arrow-back" width={20} height={20}/>
                Go Back
            </Link>

            <HeroDetailSection/>
            <ProjectDetailSection/>
            <BookingSection/>
        </main>
    )
}

export default Detail;