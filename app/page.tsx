import Grid from "@/components/Grid";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}  />
      <Hero/>
      <Grid/>
    </div>
  </main>
  );
}
