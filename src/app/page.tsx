



import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { SearchSection } from "@/components/SearchSection";

import { TabsDemo } from "@/components/TabsDemo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen after: bg-black  antialiased bg-grid-white/[0.2]">
      
        <HeroSection />
        <SearchSection/>
        <TabsDemo/>
         <Footer />
      </main>
    </>
  );
}
