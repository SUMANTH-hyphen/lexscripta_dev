import NavbarCC from "@/components/ui/heroui/navbar";
import PageAbout from "./about/page";
import PageHome from "./home/page";


export default function Home() {
  return (
    <div>
      <NavbarCC />
      <PageHome />
      <PageAbout />
    </div>
  );
}
