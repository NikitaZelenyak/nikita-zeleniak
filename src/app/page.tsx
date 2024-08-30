import Image from "next/image";
import { HomeHeroSection } from "./components/HomePage/Hero/HomeHeroSection";
import { SkillsSections } from "./components/HomePage/SkillsSections/SkillsSections";
export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <SkillsSections />
      <h1>home</h1>
    </>
  );
}
