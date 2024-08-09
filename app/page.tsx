import ParallexHeroImage from "./components/ParallexHeroImage";
import { Nav } from "./components/Nav";
import DynamicHeroImage from "./components/DynamicHeroImage";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Nav/>
      <section className=" flex justify-center items-center">
        <DynamicHeroImage/>
      </section>
      Mentos; Yes to Fresh
    </main>
  );
}
