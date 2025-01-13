import { HeroSection } from "../components/HeroSection";
import NavBar from "../components/NavBar";
import { SkillsSection } from "../components/SkillsSection";

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
    </main>
  );
};
