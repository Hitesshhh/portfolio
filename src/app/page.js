import Hero from "./sections/Hero";
import { Navbar } from "./components/HeroSectionComponents/Navbar";
import { SelectedProjects } from "./sections/SelectedProjects";

export default function Home() {
  return (
   <div>
      <Navbar/>
      <Hero/>
      <SelectedProjects/>
   </div>
  );
}
