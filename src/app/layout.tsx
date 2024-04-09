import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer, Navbar } from "@/components/global";

const jakartaSans = Plus_Jakarta_Sans({ subsets:['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jakartaSans.className} lang="en">
      <body>
        <Navbar/>
         {children}
        <Footer/>
      </body>
    </html>
  );
}
