import { Education } from "../components/Education";
import { Experinces } from "../components/Experinces";
import { HeroSection } from "../components/HeroSection";
import NavBar from "../components/NavBar";
import { SkillsSection } from "../components/SkillsSection";
import { Works } from "../components/Works";

export const Header = () => {
  return (
    <section>
      <NavBar />
      <HeroSection />
    </section>
  );
};

export const HomePage = () => {
  return (
    <main className="bg-[#28242C] overflow-x-hidden w-full  h-screen">
      <Header />
      <SkillsSection />
      <Experinces />
      <Works />
      <Education />
    </main>
  );
};
