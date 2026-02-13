import SectionA from "@/components/landing-page/section-a";
import SectionB from "@/components/landing-page/section-b";
import SectionC from "@/components/landing-page/section-c";
import SectionD from "@/components/landing-page/section-d";
import SectionE from "@/components/landing-page/section-e";
import { Footer } from "@/components/ui/footer"; 


export default function Home() {
  return (
    <div>
      <main>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      </main>
      <Footer />

    </div>
    
  );
}
