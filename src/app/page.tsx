import Banner from "@/components/pages/home/Banner";
import Welcome from "@/components/pages/home/Welcome";
import Project from "@/components/pages/home/Project";
import Services from "@/components/pages/home/Services";
import Client from "@/components/pages/home/Client";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <Welcome />
      <Project />
      <Services />
      <Client />
    </div>
  );
}
